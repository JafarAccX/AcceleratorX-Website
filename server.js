import fs from 'node:fs/promises'
import express from 'express'

const isProduction = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()

  let vite
  if (!isProduction) {
    const { createServer } = await import('vite')
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    app.use(vite.middlewares)
  } else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use('/', sirv('./dist/client', { extensions: [] }))
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template
      let render

      if (!isProduction && vite) {
        template = await fs.readFile('./index.html', 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        template = await fs.readFile('./dist/client/index.html', 'utf-8')
        render = (await import('./dist/server/entry-server.js')).render
      }

      // Fetch blog data on server-side if it's a blog route
      let blogData = null;
      const blogSlugMatch = url.match(/^\/blogs\/([^\/\?]+)/);
      if (blogSlugMatch) {
        const slug = blogSlugMatch[1];
        console.log(`🔍 [SSR] Detected blog route, fetching data for slug: ${slug}`);
        try {
          const backendUrl = process.env.API_BASE_URL || 'http://localhost:3020';
          const response = await fetch(`${backendUrl}/api/blogs/${slug}`);
          if (response.ok) {
            const result = await response.json();
            blogData = result.data;
            console.log(`✅ [SSR] Blog data fetched successfully:`, blogData?.Title);
          } else {
            console.log(`⚠️ [SSR] Blog not found for slug: ${slug}`);
          }
        } catch (error) {
          console.error(`❌ [SSR] Error fetching blog data:`, error);
        }
      }

      const { html: appHtml, context } = render(url, { blogData })

      // Extract helmet context for meta tags
      const { helmet } = context || {};
      const helmetData = helmet?.helmet || {};

      // If we have blog data, inject meta tags directly
      let customMetaTags = '';
      let blogContentHTML = '';

      if (blogData) {
        const metaTitle = blogData.SEO_MetaTitle || blogData.Title || "Blog Post | AcceleratorX";
        const metaDescription = blogData.SEO_MetaDescription || blogData.Excerpt || "Read this insightful blog post on AcceleratorX.";
        const canonicalUrl = `https://www.acceleratorx.org/blogs/${blogData.Slug}`;
        const ogImage = blogData.CoverImage || "https://www.acceleratorx.org/companylogo-new.webp";
        const publishedDate = blogData.PublishedAt ? new Date(blogData.PublishedAt).toISOString() : new Date(blogData.CreatedAt).toISOString();
        const modifiedDate = blogData.UpdatedAt ? new Date(blogData.UpdatedAt).toISOString() : publishedDate;

        // Parse EditorJS content to HTML for SSR
        let contentHTML = '';
        if (blogData.Content) {
          try {
            if (typeof blogData.Content === 'string') {
              contentHTML = blogData.Content;
            } else if (blogData.Content.blocks && Array.isArray(blogData.Content.blocks)) {
              // Simple EditorJS to HTML conversion for SSR
              contentHTML = blogData.Content.blocks.map(block => {
                switch (block.type) {
                  case 'header':
                    const level = block.data.level || 2;
                    return `<h${level}>${block.data.text}</h${level}>`;
                  case 'paragraph':
                    return `<p>${block.data.text}</p>`;
                  case 'list':
                    const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
                    const items = block.data.items.map(item => `<li>${item}</li>`).join('');
                    return `<${tag}>${items}</${tag}>`;
                  case 'quote':
                    return `<blockquote><p>${block.data.text}</p>${block.data.caption ? `<cite>${block.data.caption}</cite>` : ''}</blockquote>`;
                  case 'code':
                    return `<pre><code>${block.data.code}</code></pre>`;
                  case 'delimiter':
                    return `<hr />`;
                  case 'image':
                    return `<figure><img src="${block.data.file.url}" alt="${block.data.caption || ''}" />${block.data.caption ? `<figcaption>${block.data.caption}</figcaption>` : ''}</figure>`;
                  default:
                    return '';
                }
              }).join('\n');
            }
          } catch (error) {
            console.error('Error parsing blog content for SSR:', error);
            contentHTML = '<p>Content unavailable</p>';
          }
        }

        // Generate blog content HTML for SSR
        blogContentHTML = `
          <article class="max-w-4xl mx-auto px-4 py-12">
            ${blogData.CoverImage ? `
            <div class="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <img src="${blogData.CoverImage}" alt="${blogData.Title}" class="w-full h-full object-cover" />
            </div>
            ` : ''}
            
            <h1 class="text-4xl font-bold mb-4 text-white">${blogData.Title}</h1>
            
            <div class="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
              <div class="flex items-center space-x-4 text-gray-400">
                ${blogData.Author ? `
                <div class="flex items-center space-x-2">
                  ${blogData.Author.ProfileImage ? `<img src="${blogData.Author.ProfileImage}" alt="${blogData.Author.FullName}" class="w-10 h-10 rounded-full" />` : ''}
                  <div>
                    <p class="text-white font-medium">${blogData.Author.FullName}</p>
                    <p class="text-sm">${new Date(blogData.PublishedAt || blogData.CreatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                ` : ''}
              </div>
              <div class="flex items-center space-x-6 text-gray-400">
                <div class="flex items-center space-x-2">
                  <span>👁️</span>
                  <span>${blogData.ViewsCount || 0} views</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>❤️</span>
                  <span>${blogData.LikesCount || 0}</span>
                </div>
              </div>
            </div>
            
            <div class="prose prose-lg prose-invert max-w-none BlogContent">
              ${contentHTML}
            </div>
          </article>
        `;

        customMetaTags = `
    <!-- SEO Meta Tags -->
    <title>${metaTitle}</title>
    <meta name="title" content="${metaTitle}" />
    <meta name="description" content="${metaDescription}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${metaTitle}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="AcceleratorX" />
    <meta property="article:published_time" content="${publishedDate}" />
    <meta property="article:modified_time" content="${modifiedDate}" />
    ${blogData.Author?.FullName ? `<meta property="article:author" content="${blogData.Author.FullName}" />` : ''}
    ${blogData.Categories && blogData.Categories.length > 0 ? `<meta property="article:section" content="${blogData.Categories[0].Name}" />` : ''}
    ${blogData.Tags ? blogData.Tags.map(tag => `<meta property="article:tag" content="${tag.Name}" />`).join('\n    ') : ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    <meta property="twitter:title" content="${metaTitle}" />
    <meta property="twitter:description" content="${metaDescription}" />
    <meta property="twitter:image" content="${ogImage}" />
    
    <!-- Additional SEO Tags -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="${blogData.Author?.FullName || 'AcceleratorX'}" />
    ${blogData.Tags && blogData.Tags.length > 0 ? `<meta name="keywords" content="${blogData.Tags.map(tag => tag.Name).join(', ')}" />` : ''}
    
    <!-- Structured Data - JSON-LD -->
    <script type="application/ld+json">
    ${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogData.Title,
          "description": metaDescription,
          "image": ogImage,
          "datePublished": publishedDate,
          "dateModified": modifiedDate,
          "author": {
            "@type": "Person",
            "name": blogData.Author?.FullName || "AcceleratorX",
            ...(blogData.Author?.ProfileImage && { "image": blogData.Author.ProfileImage }),
            ...(blogData.Author?.Email && { "email": blogData.Author.Email })
          },
          "publisher": {
            "@type": "Organization",
            "name": "AcceleratorX",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.acceleratorx.org/companylogo-new.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          ...(blogData.Categories && blogData.Categories.length > 0 && {
            "articleSection": blogData.Categories.map(cat => cat.Name)
          }),
          ...(blogData.Tags && blogData.Tags.length > 0 && {
            "keywords": blogData.Tags.map(tag => tag.Name).join(", ")
          })
        })}
    </script>`;
      }

      // Inject helmet meta tags into the template
      let htmlWithMeta = template;

      // If we have blog content HTML, inject it for SSR
      if (blogContentHTML) {
        // Replace ssr-outlet with actual blog content
        htmlWithMeta = htmlWithMeta.replace(
          '<!--ssr-outlet-->',
          `<div class="min-h-screen bg-black text-white pt-20">
            ${blogContentHTML}
          </div>`
        );
        // Also replace app-html placeholder if it exists
        htmlWithMeta = htmlWithMeta.replace('<!--app-html-->', '');
      } else {
        // No blog data, use the React app HTML
        htmlWithMeta = htmlWithMeta.replace('<!--app-html-->', appHtml);
      }

      // If we have custom meta tags from blog data, inject them
      if (customMetaTags) {
        htmlWithMeta = htmlWithMeta.replace(
          '</head>',
          `${customMetaTags}\n  </head>`
        );
      } else if (helmetData) {
        // Otherwise use helmet data
        const headTags = [
          helmetData.title?.toString() || '',
          helmetData.meta?.toString() || '',
          helmetData.link?.toString() || '',
          helmetData.script?.toString() || ''
        ].filter(Boolean).join('\n');

        if (headTags) {
          htmlWithMeta = htmlWithMeta.replace(
            '</head>',
            `${headTags}\n  </head>`
          );
        }
      }

      // Import and use the metadata function to get page-specific data
      let pageMetadata;
      try {
        let metadataModule;
        if (!isProduction && vite) {
          metadataModule = await vite.ssrLoadModule('/src/utils/metadata.ts');
        } else {
          // In production, try to import from the server bundle, but fallback to inline metadata
          try {
            metadataModule = await import('./dist/server/utils/metadata.js');
          } catch (importError) {
            // If the metadata module is not in the build, use inline metadata
            console.log('Metadata module not found in build, using inline metadata');
            metadataModule = {
              getPageMetadata: (path) => {
                const pageMetadata = {
                  // Homepage
                  "/": {
                    title: "AcceleratorX | Learn Product, AI & Data Skills",
                    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
                    ogTitle: "AcceleratorX - Future Skills for Career Growth",
                    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
                    ogImage: "/companylogo-new.webp",
                    canonicalUrl: "https://www.acceleratorx.org/"
                  },
                  // About Us
                  "/about-us": {
                    title: "About Us | AcceleratorX Learning Platform",
                    description: "Discover AcceleratorX, a platform dedicated to upskilling professionals in AI, Data Analytics, Marketing, and Product Management with expert-led programs.",
                    ogTitle: "About AcceleratorX",
                    ogDescription: "Learn how AcceleratorX helps learners acquire future-ready skills in AI, Product Management, and Data Analytics.",
                    canonicalUrl: "https://www.acceleratorx.org/about-us"
                  },
                  // Auth & Account
                  "/sign-up": {
                    title: "Sign Up | AcceleratorX",
                    description: "Create your AcceleratorX account to access AI, Data Analytics, Product Management, and Marketing courses and start your learning journey.",
                    ogTitle: "Sign Up for AcceleratorX",
                    ogDescription: "Register for AcceleratorX and begin your learning journey today.",
                    canonicalUrl: "https://www.acceleratorx.org/sign-up"
                  },
                  "/sign-in": {
                    title: "Sign In | AcceleratorX",
                    description: "Sign in to your AcceleratorX account to access courses, workshops, and learning materials in AI, Data Analytics, Product Management, and Marketing.",
                    ogTitle: "Sign In to AcceleratorX",
                    ogDescription: "Access your AcceleratorX account and continue your learning journey.",
                    canonicalUrl: "https://www.acceleratorx.org/sign-in"
                  },
                  // Policies
                  "/privacy-policy": {
                    title: "Privacy Policy | AcceleratorX",
                    description: "Read AcceleratorX's privacy policy to understand how we collect, protect, and use your personal information while you use our platform.",
                    ogTitle: "AcceleratorX Privacy Policy",
                    ogDescription: "AcceleratorX ensures your data privacy and security. Read our complete privacy policy.",
                    canonicalUrl: "https://www.acceleratorx.org/privacy-policy"
                  },
                  "/terms-and-conditions": {
                    title: "Terms & Conditions | AcceleratorX",
                    description: "Review AcceleratorX's terms and conditions outlining the user agreement, responsibilities, and usage guidelines for our courses and services.",
                    ogTitle: "AcceleratorX Terms & Conditions",
                    ogDescription: "Learn about the rules and guidelines for using AcceleratorX programs and services.",
                    canonicalUrl: "https://www.acceleratorx.org/terms-and-conditions"
                  },
                  "/refund-policy": {
                    title: "Refund Policy | AcceleratorX",
                    description: "Understand AcceleratorX's refund policy covering eligibility, process, and conditions for refunds on courses, workshops, and events.",
                    ogTitle: "AcceleratorX Refund Policy",
                    ogDescription: "Learn how AcceleratorX manages course and workshop refunds.",
                    canonicalUrl: "https://www.acceleratorx.org/refund-policy"
                  },
                  // Programs & Events
                  "/xsat": {
                    title: "XSAT Program | AcceleratorX",
                    description: "Test your Product Management, AI, and Data Analytics skills with AcceleratorX's XSAT program designed to benchmark and enhance capabilities.",
                    ogTitle: "AcceleratorX XSAT Program",
                    ogDescription: "Take AcceleratorX's XSAT and measure your career readiness in AI, Data, and Product Management.",
                    canonicalUrl: "https://www.acceleratorx.org/xsat"
                  },
                  "/events": {
                    title: "Events & Workshops | AcceleratorX",
                    description: "Explore AcceleratorX events and workshops on Product Management, AI, Data Analytics, and Marketing with industry experts and mentors.",
                    ogTitle: "AcceleratorX Events & Workshops",
                    ogDescription: "Learn future skills by joining AcceleratorX's expert-led events and masterclasses.",
                    canonicalUrl: "https://www.acceleratorx.org/events"
                  },
                  "/event/PMtakedown/view": {
                    title: "Product Management Takedown Event | AcceleratorX",
                    description: "Join the PM Takedown event by AcceleratorX and learn advanced frameworks, strategies, and insights in real-world product management.",
                    ogTitle: "AcceleratorX PM Takedown Event",
                    ogDescription: "Learn practical PM strategies at AcceleratorX's Product Management Takedown event.",
                    canonicalUrl: "https://www.acceleratorx.org/event/PMtakedown/view"
                  },
                  // Courses
                  "/courses/generative-ai": {
                    title: "Generative AI Course | AcceleratorX",
                    description: "Master Generative AI at AcceleratorX with hands-on training in AI tools, workflows, and applications to build intelligent business solutions.",
                    ogTitle: "AcceleratorX Generative AI Course",
                    ogDescription: "Enroll in AcceleratorX's Generative AI course and learn to apply AI-driven innovation.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/generative-ai"
                  },
                  "/courses/generative-ai-fb": {
                    title: "Generative AI Fast-Track Course | AcceleratorX",
                    description: "Enroll in AcceleratorX's fast-track Generative AI program designed to help professionals quickly adopt AI tools and applications.",
                    ogTitle: "AcceleratorX Generative AI Fast-Track",
                    ogDescription: "Learn Generative AI faster with AcceleratorX's focused fast-track program.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/generative-ai"
                  },
                  "/courses/advance-performance-marketing-with-ai": {
                    title: "AI Performance Marketing Course | AcceleratorX",
                    description: "Learn advanced performance marketing using AI-driven strategies at AcceleratorX. Gain expertise in automation, targeting, and campaign optimization.",
                    ogTitle: "AcceleratorX AI Performance Marketing",
                    ogDescription: "Master AI-powered marketing and boost business performance with AcceleratorX.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/advance-performance-marketing-with-ai"
                  },
                  "/courses/data-analytics": {
                    title: "Data Analytics Course | AcceleratorX",
                    description: "Gain hands-on expertise in data analysis, visualization, and decision-making with AcceleratorX's Data Analytics training program.",
                    ogTitle: "AcceleratorX Data Analytics Course",
                    ogDescription: "Learn data analytics skills to analyze, visualize, and make smarter decisions.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/data-analytics"
                  },
                  "/courses/product-management": {
                    title: "Product Management Course | AcceleratorX",
                    description: "Learn product strategy, lifecycle management, and leadership skills with AcceleratorX's Product Management course.",
                    ogTitle: "AcceleratorX Product Management Course",
                    ogDescription: "Master product frameworks and tools in AcceleratorX's PM course.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/product-management"
                  },
                  "/courses/gen-ai-for-pms": {
                    title: "Generative AI for Product Managers | AcceleratorX",
                    description: "Learn how Product Managers can use Generative AI for product strategy, automation, and innovation in AcceleratorX's specialized course.",
                    ogTitle: "AcceleratorX GenAI for PMs Course",
                    ogDescription: "Discover Generative AI applications tailored for Product Managers.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/gen-ai-for-pms"
                  },
                  "/courses/product-management-program-fb": {
                    title: "Product Management Program (Fast-Track) | AcceleratorX",
                    description: "Enroll in AcceleratorX's fast-track Product Management program designed to help professionals gain PM skills quickly and effectively.",
                    ogTitle: "AcceleratorX PM Fast-Track Program",
                    ogDescription: "Learn PM frameworks and tools in AcceleratorX's accelerated program.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/product-management"
                  },
                  "/courses/data-analytics-program-fb": {
                    title: "Data Analytics Program (Fast-Track) | AcceleratorX",
                    description: "Join AcceleratorX's fast-track Data Analytics program to quickly develop analysis, visualization, and reporting skills for business.",
                    ogTitle: "AcceleratorX Data Analytics Fast-Track",
                    ogDescription: "Upskill in Data Analytics with AcceleratorX's fast-track program.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/data-analytics"
                  },
                  "/courses/data-analytics-program-fb-b": {
                    title: "Data Analytics Program (Batch) | AcceleratorX",
                    description: "Learn data-driven decision-making in AcceleratorX's Data Analytics batch program. Gain practical analytics skills with expert-led training.",
                    ogTitle: "AcceleratorX Data Analytics Batch Program",
                    ogDescription: "Enroll in AcceleratorX's Data Analytics batch program today.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/data-analytics"
                  },
                  "/courses/product-management-program-eie": {
                    title: "Product Management EIE Program | AcceleratorX",
                    description: "AcceleratorX's EIE Product Management program helps you gain structured PM knowledge, practical tools, and leadership expertise.",
                    ogTitle: "AcceleratorX Product Management EIE",
                    ogDescription: "Join AcceleratorX's exclusive Product Management EIE program.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/product-management"
                  },
                  "/courses/data-analytics-program-eie": {
                    title: "Data Analytics EIE Program | AcceleratorX",
                    description: "Master analytics and insights with AcceleratorX's Data Analytics EIE program designed for professionals and aspiring data leaders.",
                    ogTitle: "AcceleratorX Data Analytics EIE",
                    ogDescription: "Build expert-level data analytics skills in AcceleratorX's EIE program.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/data-analytics"
                  },
                  "/courses/n8n-automation": {
                    title: "n8n Automation Course | AcceleratorX",
                    description: "Learn workflow automation using n8n with AcceleratorX. Build custom automations, optimize processes, and integrate AI-driven tools.",
                    ogTitle: "AcceleratorX n8n Automation Course",
                    ogDescription: "Master n8n and build powerful automation workflows with AcceleratorX.",
                    canonicalUrl: "https://www.acceleratorx.org/courses/n8n-automation"
                  },
                  "/advance-ai-crash-course": {
                    title: "Advanced AI Crash Course | AcceleratorX",
                    description: "Join the Advanced AI Crash Course to build real-world AI agents, master modern frameworks, and learn from industry experts.",
                    ogTitle: "Advanced AI Crash Course - AcceleratorX",
                    ogDescription: "Build AI Agents, work with modern frameworks, and learn from the best in this intensive crash course.",
                    canonicalUrl: "https://www.acceleratorx.org/advance-ai-crash-course"
                  },
                  // Success Pages
                  "/thank-you": {
                    title: "Thank You | AcceleratorX",
                    description: "Thank you for connecting with AcceleratorX. Your registration or request has been received successfully. We'll be in touch soon.",
                    ogTitle: "Thank You - AcceleratorX",
                    ogDescription: "AcceleratorX has received your submission. Our team will connect with you shortly.",
                    canonicalUrl: "https://www.acceleratorx.org/thank-you"
                  },
                  "/registration-sucessfull": {
                    title: "Registration Successful | AcceleratorX",
                    description: "Your AcceleratorX registration was successful. Get ready to start learning and exploring our AI, Data Analytics, and Product Management programs.",
                    ogTitle: "Registration Confirmed - AcceleratorX",
                    ogDescription: "Your AcceleratorX registration is complete. Begin your learning journey today.",
                    canonicalUrl: "https://www.acceleratorx.org/registration-sucessfull"
                  },
                  // Workshop Routes
                  "/workshop/pm-masterclass": {
                    title: "Product Management Masterclass | AcceleratorX",
                    description: "Learn advanced product management strategies, frameworks, and tools in AcceleratorX's PM Masterclass taught by industry experts.",
                    ogTitle: "AcceleratorX PM Masterclass",
                    ogDescription: "Join AcceleratorX's Product Management Masterclass to level up your PM skills.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/pm-masterclass"
                  },
                  "/workshop/dm-masterclass": {
                    title: "Digital Marketing Masterclass | AcceleratorX",
                    description: "Enroll in AcceleratorX's Digital Marketing Masterclass to master SEO, performance marketing, and AI-powered campaigns for business growth.",
                    ogTitle: "AcceleratorX Digital Marketing Masterclass",
                    ogDescription: "Learn digital marketing strategies and tools at AcceleratorX's DM Masterclass.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/dm-masterclass"
                  },
                  "/workshop/da-masterclass": {
                    title: "Data Analytics Masterclass | AcceleratorX",
                    description: "Join AcceleratorX's Data Analytics Masterclass to develop expertise in data visualization, reporting, and business insights.",
                    ogTitle: "AcceleratorX Data Analytics Masterclass",
                    ogDescription: "Learn advanced analytics and decision-making at AcceleratorX's DA Masterclass.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/da-masterclass"
                  },
                  "/workshop/da-masterclass-bxwxy": {
                    title: "Data Analytics Workshop | AcceleratorX",
                    description: "Experience hands-on training in AcceleratorX's Data Analytics Workshop and sharpen your skills in analytics and business intelligence.",
                    ogTitle: "AcceleratorX Data Analytics Workshop",
                    ogDescription: "Build strong data analytics skills with AcceleratorX's hands-on workshop.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/da-masterclass-bxwxy"
                  },
                  "/workshop/gen-ai-masterclass": {
                    title: "Generative AI Masterclass | AcceleratorX",
                    description: "Learn practical Generative AI applications in AcceleratorX's Masterclass, designed to help professionals adopt AI in real projects.",
                    ogTitle: "AcceleratorX Generative AI Masterclass",
                    ogDescription: "Master Generative AI tools and workflows with AcceleratorX's expert-led class.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/gen-ai-masterclass"
                  },
                  "/workshop/gen-ai-masterclass-bxwcy": {
                    title: "AI Tools Workshop | AcceleratorX",
                    description: "Attend AcceleratorX's Generative AI workshop to explore tools, automation, and real-world AI workflows for professional growth.",
                    ogTitle: "AcceleratorX AI Workshop",
                    ogDescription: "Learn AI-powered tools and workflows with AcceleratorX's Generative AI workshop.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/gen-ai-masterclass-bxwcy"
                  },
                  "/workshop/gen-ai-masterclass-thidtx": {
                    title: "Generative AI Training Workshop | AcceleratorX",
                    description: "Upskill in AcceleratorX's Generative AI training workshop and gain applied knowledge of AI tools, models, and automation workflows.",
                    ogTitle: "AcceleratorX Generative AI Training",
                    ogDescription: "Learn advanced AI models and workflows at AcceleratorX's GenAI workshop.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop/gen-ai-masterclass-thidtx"
                  },
                  "/workshop-registration/success": {
                    title: "Workshop Registration Success | AcceleratorX",
                    description: "Your workshop registration at AcceleratorX is successful. Get ready to join expert-led sessions in Product, Data, Marketing, and AI.",
                    ogTitle: "AcceleratorX Workshop Registration Confirmed",
                    ogDescription: "Registration successful. Join your upcoming AcceleratorX workshop.",
                    canonicalUrl: "https://www.acceleratorx.org/workshop-registration/success"
                  },
                  // Flyer Routes
                  "/fa-register/gen-ai": {
                    title: "Register for Generative AI Program | AcceleratorX",
                    description: "Sign up for AcceleratorX's Generative AI program and start learning AI-powered tools, automation, and applications for real-world use.",
                    ogTitle: "AcceleratorX Generative AI Registration",
                    ogDescription: "Register today for AcceleratorX's Generative AI learning program.",
                    canonicalUrl: "https://www.acceleratorx.org/fa-register/gen-ai"
                  },
                  "/fa-register/pm": {
                    title: "Register for Product Management Program | AcceleratorX",
                    description: "Join AcceleratorX's Product Management program by registering now. Learn practical PM frameworks, tools, and strategies with experts.",
                    ogTitle: "AcceleratorX PM Program Registration",
                    ogDescription: "Secure your spot in AcceleratorX's Product Management program.",
                    canonicalUrl: "https://www.acceleratorx.org/fa-register/pm"
                  },
                  "/fa-register/dm": {
                    title: "Register for Digital Marketing Program | AcceleratorX",
                    description: "Sign up for AcceleratorX's Digital Marketing program and learn AI-driven SEO, performance marketing, and campaign optimization.",
                    ogTitle: "AcceleratorX Digital Marketing Registration",
                    ogDescription: "Register for AcceleratorX's DM program and start learning AI-powered marketing.",
                    canonicalUrl: "https://www.acceleratorx.org/fa-register/dm"
                  },
                  "/fa-register/da": {
                    title: "Register for Data Analytics Program | AcceleratorX",
                    description: "Enroll in AcceleratorX's Data Analytics program and gain skills in data visualization, business insights, and data-driven decision-making.",
                    ogTitle: "AcceleratorX Data Analytics Registration",
                    ogDescription: "Register for AcceleratorX's Data Analytics program and start your learning journey.",
                    canonicalUrl: "https://www.acceleratorx.org/fa-register/da"
                  }
                };

                // Try exact match first
                if (pageMetadata[path]) {
                  return pageMetadata[path];
                }

                // Handle dynamic routes (like blog edit with ID)
                if (path.startsWith('/admin/blogs/edit/')) {
                  return pageMetadata['/admin/blogs/edit/:id'];
                }

                // Handle dynamic job routes
                if (path.startsWith('/jobs/')) {
                  return {
                    title: "Job Details | AcceleratorX",
                    description: "Explore career opportunities at AcceleratorX and join our mission to upskill professionals in AI, Data Analytics, and Product Management.",
                    ogTitle: "Career Opportunities - AcceleratorX",
                    ogDescription: "Find your next career opportunity with AcceleratorX and make an impact in the tech industry.",
                    canonicalUrl: `https://www.acceleratorx.org${path}`
                  };
                }

                // Handle dynamic certificate routes
                if (path.startsWith('/certificate/')) {
                  return {
                    title: "Certificate Verification | AcceleratorX",
                    description: "Verify your AcceleratorX certificate for courses in Product Management, Data Analytics, Generative AI, and Digital Marketing.",
                    ogTitle: "AcceleratorX Certificate Verification",
                    ogDescription: "Verify and download your AcceleratorX course completion certificate.",
                    canonicalUrl: `https://www.acceleratorx.org${path}`
                  };
                }

                // Default fallback
                return {
                  title: "AcceleratorX | Learn Product, AI & Data Skills",
                  description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
                  ogTitle: "AcceleratorX - Future Skills for Career Growth",
                  ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
                  ogImage: "/companylogo-new.webp",
                  canonicalUrl: `https://www.acceleratorx.org${path}`
                };
              }
            };
          }
        }
        pageMetadata = metadataModule.getPageMetadata(url);
        console.log(`SSR: Loading metadata for URL: ${url}`, pageMetadata);
      } catch (e) {
        console.error('Error loading metadata:', e);
        // Fallback metadata if import fails
        pageMetadata = {
          title: "AcceleratorX | Learn Product, AI & Data Skills",
          description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
          ogTitle: "AcceleratorX - Future Skills for Career Growth",
          ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
          ogImage: "/companylogo-new.webp",
          canonicalUrl: `https://www.acceleratorx.org${url}`
        };
      }

      // Replace the existing meta tags with page-specific ones (only if we don't have blog data)
      let html = htmlWithMeta;
      if (!blogData && !customMetaTags) {
        html = html
          // Replace title (only if helmet didn't provide one)
          .replace(/<title>.*?<\/title>/, helmetData.title?.toString() || `<title>${pageMetadata.title}</title>`)
          // Replace meta name="title" (if not already in helmet)
          .replace(/<meta name="title"[^>]*>/g, `<meta name="title" content="${pageMetadata.ogTitle}" />`)
          // Replace meta name="description" (if not already in helmet)
          .replace(/<meta name="description"[^>]*>/g, `<meta name="description" content="${pageMetadata.description}" />`)
          // Replace Open Graph tags (if not already in helmet)
          .replace(/<meta property="og:title"[^>]*>/g, `<meta property="og:title" content="${pageMetadata.ogTitle}" />`)
          .replace(/<meta property="og:description"[^>]*>/g, `<meta property="og:description" content="${pageMetadata.ogDescription}" />`)
          .replace(/<meta property="og:url"[^>]*>/g, `<meta property="og:url" content="${pageMetadata.canonicalUrl}" />`)
          .replace(/<meta property="og:image"[^>]*>/g, `<meta property="og:image" content="https://www.acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />`)
          // Replace Twitter tags (if not already in helmet)
          .replace(/<meta property="twitter:title"[^>]*>/g, `<meta property="twitter:title" content="${pageMetadata.ogTitle}" />`)
          .replace(/<meta property="twitter:description"[^>]*>/g, `<meta property="twitter:description" content="${pageMetadata.ogDescription}" />`)
          .replace(/<meta property="twitter:url"[^>]*>/g, `<meta property="twitter:url" content="${pageMetadata.canonicalUrl}" />`)
          .replace(/<meta property="twitter:image"[^>]*>/g, `<meta property="twitter:image" content="https://www.acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />`)

        // If helmet didn't provide canonical, add it
        if (!helmetData.link?.toString()?.includes('canonical')) {
          const viewportIndex = html.indexOf('<meta name="viewport"');
          if (viewportIndex !== -1) {
            const insertAfter = html.indexOf('>', viewportIndex) + 1;
            html = html.slice(0, insertAfter) +
              `\n    <link rel="canonical" href="${pageMetadata.canonicalUrl}" />` +
              html.slice(insertAfter);
          }
        }
      }

      // Replace the SSR outlet (if not already replaced by blog content)
      if (!blogContentHTML) {
        if (html.includes('<!--ssr-outlet-->')) {
          html = html.replace(`<!--ssr-outlet-->`, appHtml)
        }
        if (html.includes('<!--app-html-->')) {
          html = html.replace(`<!--app-html-->`, appHtml)
        }
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e)
      }
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return app
}

createServer().then(app => {
  const port = process.env.PORT || 7000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
})
