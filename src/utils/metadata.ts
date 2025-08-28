// Page metadata configuration
export interface PageMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  canonicalUrl: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  // Homepage
  "/": {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/companylogo-new.webp",
    canonicalUrl: "https://acceleratorx.org/"
  },

  // About Us
  "/about-us": {
    title: "About Us | AcceleratorX Learning Platform",
    description: "Discover AcceleratorX, a platform dedicated to upskilling professionals in AI, Data Analytics, Marketing, and Product Management with expert-led programs.",
    ogTitle: "About AcceleratorX",
    ogDescription: "Learn how AcceleratorX helps learners acquire future-ready skills in AI, Product Management, and Data Analytics.",
    canonicalUrl: "https://acceleratorx.org/about-us"
  },

  // Auth & Account
  // "/login": {
  //   title: "Login | AcceleratorX Learning Portal",
  //   description: "Login to AcceleratorX and access your courses, workshops, and resources in Product Management, AI, Data Analytics, and Marketing programs.",
  //   ogTitle: "Login to AcceleratorX",
  //   ogDescription: "Sign in to your AcceleratorX account to continue your learning journey and access all your enrolled courses.",
  //   canonicalUrl: "https://acceleratorx.org/login"
  // },

  "/sign-up": {
    title: "Sign Up | AcceleratorX",
    description: "Create your AcceleratorX account to access AI, Data Analytics, Product Management, and Marketing courses and start your learning journey.",
    ogTitle: "Sign Up for AcceleratorX",
    ogDescription: "Register for AcceleratorX and begin your learning journey today.",
    canonicalUrl: "https://acceleratorx.org/sign-up"
  },

  "/sign-in": {
    title: "Sign In | AcceleratorX",
    description: "Sign in to your AcceleratorX account to access courses, workshops, and learning materials in AI, Data Analytics, Product Management, and Marketing.",
    ogTitle: "Sign In to AcceleratorX",
    ogDescription: "Access your AcceleratorX account and continue your learning journey.",
    canonicalUrl: "https://acceleratorx.org/sign-in"
  },

  // Policies
  "/privacy-policy": {
    title: "Privacy Policy | AcceleratorX",
    description: "Read AcceleratorX's privacy policy to understand how we collect, protect, and use your personal information while you use our platform.",
    ogTitle: "AcceleratorX Privacy Policy",
    ogDescription: "AcceleratorX ensures your data privacy and security. Read our complete privacy policy.",
    canonicalUrl: "https://acceleratorx.org/privacy-policy"
  },

  "/terms-and-conditions": {
    title: "Terms & Conditions | AcceleratorX",
    description: "Review AcceleratorX's terms and conditions outlining the user agreement, responsibilities, and usage guidelines for our courses and services.",
    ogTitle: "AcceleratorX Terms & Conditions",
    ogDescription: "Learn about the rules and guidelines for using AcceleratorX programs and services.",
    canonicalUrl: "https://acceleratorx.org/terms-and-conditions"
  },

  "/refund-policy": {
    title: "Refund Policy | AcceleratorX",
    description: "Understand AcceleratorX's refund policy covering eligibility, process, and conditions for refunds on courses, workshops, and events.",
    ogTitle: "AcceleratorX Refund Policy",
    ogDescription: "Learn how AcceleratorX manages course and workshop refunds.",
    canonicalUrl: "https://acceleratorx.org/refund-policy"
  },

  // Programs & Events
  "/xsat": {
    title: "XSAT Program | AcceleratorX",
    description: "Test your Product Management, AI, and Data Analytics skills with AcceleratorX's XSAT program designed to benchmark and enhance capabilities.",
    ogTitle: "AcceleratorX XSAT Program",
    ogDescription: "Take AcceleratorX's XSAT and measure your career readiness in AI, Data, and Product Management.",
    canonicalUrl: "https://acceleratorx.org/xsat"
  },

  "/events": {
    title: "Events & Workshops | AcceleratorX",
    description: "Explore AcceleratorX events and workshops on Product Management, AI, Data Analytics, and Marketing with industry experts and mentors.",
    ogTitle: "AcceleratorX Events & Workshops",
    ogDescription: "Learn future skills by joining AcceleratorX's expert-led events and masterclasses.",
    canonicalUrl: "https://acceleratorx.org/events"
  },

  "/event/PMtakedown/view": {
    title: "Product Management Takedown Event | AcceleratorX",
    description: "Join the PM Takedown event by AcceleratorX and learn advanced frameworks, strategies, and insights in real-world product management.",
    ogTitle: "AcceleratorX PM Takedown Event",
    ogDescription: "Learn practical PM strategies at AcceleratorX's Product Management Takedown event.",
    canonicalUrl: "https://acceleratorx.org/event/PMtakedown/view"
  },

  // Courses
  "/courses/generative-ai": {
    title: "Generative AI Course | AcceleratorX",
    description: "Master Generative AI at AcceleratorX with hands-on training in AI tools, workflows, and applications to build intelligent business solutions.",
    ogTitle: "AcceleratorX Generative AI Course",
    ogDescription: "Enroll in AcceleratorX's Generative AI course and learn to apply AI-driven innovation.",
    canonicalUrl: "https://acceleratorx.org/courses/generative-ai"
  },

  "/courses/generative-ai-fb": {
    title: "Generative AI Fast-Track Course | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Generative AI program designed to help professionals quickly adopt AI tools and applications.",
    ogTitle: "AcceleratorX Generative AI Fast-Track",
    ogDescription: "Learn Generative AI faster with AcceleratorX's focused fast-track program.",
    canonicalUrl: "https://acceleratorx.org/courses/generative-ai"
  },

  "/courses/advance-performance-marketing-with-ai": {
    title: "AI Performance Marketing Course | AcceleratorX",
    description: "Learn advanced performance marketing using AI-driven strategies at AcceleratorX. Gain expertise in automation, targeting, and campaign optimization.",
    ogTitle: "AcceleratorX AI Performance Marketing",
    ogDescription: "Master AI-powered marketing and boost business performance with AcceleratorX.",
    canonicalUrl: "https://acceleratorx.org/courses/advance-performance-marketing-with-ai"
  },

  "/courses/data-analytics": {
    title: "Data Analytics Course | AcceleratorX",
    description: "Gain hands-on expertise in data analysis, visualization, and decision-making with AcceleratorX's Data Analytics training program.",
    ogTitle: "AcceleratorX Data Analytics Course",
    ogDescription: "Learn data analytics skills to analyze, visualize, and make smarter decisions.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },

  "/courses/product-management": {
    title: "Product Management Course | AcceleratorX",
    description: "Learn product strategy, lifecycle management, and leadership skills with AcceleratorX's Product Management course.",
    ogTitle: "AcceleratorX Product Management Course",
    ogDescription: "Master product frameworks and tools in AcceleratorX's PM course.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },

  "/courses/gen-ai-for-pms": {
    title: "Generative AI for Product Managers | AcceleratorX",
    description: "Learn how Product Managers can use Generative AI for product strategy, automation, and innovation in AcceleratorX's specialized course.",
    ogTitle: "AcceleratorX GenAI for PMs Course",
    ogDescription: "Discover Generative AI applications tailored for Product Managers.",
    canonicalUrl: "https://acceleratorx.org/courses/gen-ai-for-pms"
  },

  "/courses/product-management-program-fb": {
    title: "Product Management Program (Fast-Track) | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Product Management program designed to help professionals gain PM skills quickly and effectively.",
    ogTitle: "AcceleratorX PM Fast-Track Program",
    ogDescription: "Learn PM frameworks and tools in AcceleratorX's accelerated program.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },

  "/courses/data-analytics-program-fb": {
    title: "Data Analytics Program (Fast-Track) | AcceleratorX",
    description: "Join AcceleratorX's fast-track Data Analytics program to quickly develop analysis, visualization, and reporting skills for business.",
    ogTitle: "AcceleratorX Data Analytics Fast-Track",
    ogDescription: "Upskill in Data Analytics with AcceleratorX's fast-track program.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },

  "/courses/data-analytics-program-fb-b": {
    title: "Data Analytics Program (Batch) | AcceleratorX",
    description: "Learn data-driven decision-making in AcceleratorX's Data Analytics batch program. Gain practical analytics skills with expert-led training.",
    ogTitle: "AcceleratorX Data Analytics Batch Program",
    ogDescription: "Enroll in AcceleratorX's Data Analytics batch program today.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },

  "/courses/product-management-program-eie": {
    title: "Product Management EIE Program | AcceleratorX",
    description: "AcceleratorX's EIE Product Management program helps you gain structured PM knowledge, practical tools, and leadership expertise.",
    ogTitle: "AcceleratorX Product Management EIE",
    ogDescription: "Join AcceleratorX's exclusive Product Management EIE program.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },

  "/courses/data-analytics-program-eie": {
    title: "Data Analytics EIE Program | AcceleratorX",
    description: "Master analytics and insights with AcceleratorX's Data Analytics EIE program designed for professionals and aspiring data leaders.",
    ogTitle: "AcceleratorX Data Analytics EIE",
    ogDescription: "Build expert-level data analytics skills in AcceleratorX's EIE program.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },

  "/courses/n8n-automation": {
    title: "n8n Automation Course | AcceleratorX",
    description: "Learn workflow automation using n8n with AcceleratorX. Build custom automations, optimize processes, and integrate AI-driven tools.",
    ogTitle: "AcceleratorX n8n Automation Course",
    ogDescription: "Master n8n and build powerful automation workflows with AcceleratorX.",
    canonicalUrl: "https://acceleratorx.org/courses/n8n-automation"
  },

  // "/courses/onsite-workshopz": {
  //   title: "Onsite Workshops | AcceleratorX",
  //   description: "Join AcceleratorX's onsite workshops in AI, Data Analytics, and Product Management for immersive, hands-on learning experiences.",
  //   ogTitle: "AcceleratorX Onsite Workshops",
  //   ogDescription: "Learn through in-person sessions at AcceleratorX's onsite workshops.",
  //   canonicalUrl: "https://acceleratorx.org/courses/onsite-workshopz"
  // },

  // Admin Routes
  // "/admin/blogs": {
  //   title: "Admin Blogs Dashboard | AcceleratorX",
  //   description: "Manage blog content in the AcceleratorX admin dashboard. Create, edit, and publish blogs to engage learners and professionals.",
  //   ogTitle: "AcceleratorX Blogs Admin",
  //   ogDescription: "Access AcceleratorX's admin portal for blog management and publishing.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs"
  // },

  // "/admin/blogs/new": {
  //   title: "Create New Blog | AcceleratorX Admin",
  //   description: "Add and publish new blog posts through the AcceleratorX admin system to share insights, updates, and learning content.",
  //   ogTitle: "Create Blog - AcceleratorX Admin",
  //   ogDescription: "Write and publish new blog posts with the AcceleratorX admin dashboard.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs/new"
  // },

  // "/admin/blogs/edit/:id": {
  //   title: "Edit Blog Post | AcceleratorX Admin",
  //   description: "Update and manage existing blog posts with the AcceleratorX admin editor to keep content fresh, accurate, and engaging for learners.",
  //   ogTitle: "Edit Blog - AcceleratorX Admin",
  //   ogDescription: "Access the AcceleratorX admin editor to update and optimize blog content.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs"
  // },

  // Success Pages
  "/thank-you": {
    title: "Thank You | AcceleratorX",
    description: "Thank you for connecting with AcceleratorX. Your registration or request has been received successfully. We'll be in touch soon.",
    ogTitle: "Thank You - AcceleratorX",
    ogDescription: "AcceleratorX has received your submission. Our team will connect with you shortly.",
    canonicalUrl: "https://acceleratorx.org/thank-you"
  },

  "/registration-sucessfull": {
    title: "Registration Successful | AcceleratorX",
    description: "Your AcceleratorX registration was successful. Get ready to start learning and exploring our AI, Data Analytics, and Product Management programs.",
    ogTitle: "Registration Confirmed - AcceleratorX",
    ogDescription: "Your AcceleratorX registration is complete. Begin your learning journey today.",
    canonicalUrl: "https://acceleratorx.org/registration-sucessfull"
  },

  // Workshop Routes
  "/workshop/pm-masterclass": {
    title: "Product Management Masterclass | AcceleratorX",
    description: "Learn advanced product management strategies, frameworks, and tools in AcceleratorX's PM Masterclass taught by industry experts.",
    ogTitle: "AcceleratorX PM Masterclass",
    ogDescription: "Join AcceleratorX's Product Management Masterclass to level up your PM skills.",
    canonicalUrl: "https://acceleratorx.org/workshop/pm-masterclass"
  },

  "/workshop/dm-masterclass": {
    title: "Digital Marketing Masterclass | AcceleratorX",
    description: "Enroll in AcceleratorX's Digital Marketing Masterclass to master SEO, performance marketing, and AI-powered campaigns for business growth.",
    ogTitle: "AcceleratorX Digital Marketing Masterclass",
    ogDescription: "Learn digital marketing strategies and tools at AcceleratorX's DM Masterclass.",
    canonicalUrl: "https://acceleratorx.org/workshop/dm-masterclass"
  },

  "/workshop/da-masterclass": {
    title: "Data Analytics Masterclass | AcceleratorX",
    description: "Join AcceleratorX's Data Analytics Masterclass to develop expertise in data visualization, reporting, and business insights.",
    ogTitle: "AcceleratorX Data Analytics Masterclass",
    ogDescription: "Learn advanced analytics and decision-making at AcceleratorX's DA Masterclass.",
    canonicalUrl: "https://acceleratorx.org/workshop/da-masterclass"
  },

  "/workshop/da-masterclass-bxwxy": {
    title: "Data Analytics Workshop | AcceleratorX",
    description: "Experience hands-on training in AcceleratorX's Data Analytics Workshop and sharpen your skills in analytics and business intelligence.",
    ogTitle: "AcceleratorX Data Analytics Workshop",
    ogDescription: "Build strong data analytics skills with AcceleratorX's hands-on workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/da-masterclass-bxwxy"
  },

  "/workshop/gen-ai-masterclass": {
    title: "Generative AI Masterclass | AcceleratorX",
    description: "Learn practical Generative AI applications in AcceleratorX's Masterclass, designed to help professionals adopt AI in real projects.",
    ogTitle: "AcceleratorX Generative AI Masterclass",
    ogDescription: "Master Generative AI tools and workflows with AcceleratorX's expert-led class.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass"
  },

  "/workshop/gen-ai-masterclass-bxwcy": {
    title: "AI Tools Workshop | AcceleratorX",
    description: "Attend AcceleratorX's Generative AI workshop to explore tools, automation, and real-world AI workflows for professional growth.",
    ogTitle: "AcceleratorX AI Workshop",
    ogDescription: "Learn AI-powered tools and workflows with AcceleratorX's Generative AI workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass-bxwcy"
  },

  "/workshop/gen-ai-masterclass-thidtx": {
    title: "Generative AI Training Workshop | AcceleratorX",
    description: "Upskill in AcceleratorX's Generative AI training workshop and gain applied knowledge of AI tools, models, and automation workflows.",
    ogTitle: "AcceleratorX Generative AI Training",
    ogDescription: "Learn advanced AI models and workflows at AcceleratorX's GenAI workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass-thidtx"
  },

  "/workshop-registration/success": {
    title: "Workshop Registration Success | AcceleratorX",
    description: "Your workshop registration at AcceleratorX is successful. Get ready to join expert-led sessions in Product, Data, Marketing, and AI.",
    ogTitle: "AcceleratorX Workshop Registration Confirmed",
    ogDescription: "Registration successful. Join your upcoming AcceleratorX workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop-registration/success"
  },

  // Flyer Routes
  "/fa-register/gen-ai": {
    title: "Register for Generative AI Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Generative AI program and start learning AI-powered tools, automation, and applications for real-world use.",
    ogTitle: "AcceleratorX Generative AI Registration",
    ogDescription: "Register today for AcceleratorX's Generative AI learning program.",
    canonicalUrl: "https://acceleratorx.org/fa-register/gen-ai"
  },

  "/fa-register/pm": {
    title: "Register for Product Management Program | AcceleratorX",
    description: "Join AcceleratorX's Product Management program by registering now. Learn practical PM frameworks, tools, and strategies with experts.",
    ogTitle: "AcceleratorX PM Program Registration",
    ogDescription: "Secure your spot in AcceleratorX's Product Management program.",
    canonicalUrl: "https://acceleratorx.org/fa-register/pm"
  },

  "/fa-register/dm": {
    title: "Register for Digital Marketing Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Digital Marketing program and learn AI-driven SEO, performance marketing, and campaign optimization.",
    ogTitle: "AcceleratorX Digital Marketing Registration",
    ogDescription: "Register for AcceleratorX's DM program and start learning AI-powered marketing.",
    canonicalUrl: "https://acceleratorx.org/fa-register/dm"
  },

  "/fa-register/da": {
    title: "Register for Data Analytics Program | AcceleratorX",
    description: "Enroll in AcceleratorX's Data Analytics program and gain skills in data visualization, business insights, and data-driven decision-making.",
    ogTitle: "AcceleratorX Data Analytics Registration",
    ogDescription: "Register for AcceleratorX's Data Analytics program and start your learning journey.",
    canonicalUrl: "https://acceleratorx.org/fa-register/da"
  }
};

// Helper function to get metadata for a specific path
export function getPageMetadata(path: string): PageMetadata {
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
      canonicalUrl: `https://acceleratorx.org${path}`
    };
  }

  // Handle dynamic certificate routes
  if (path.startsWith('/certificate/')) {
    return {
      title: "Certificate Verification | AcceleratorX",
      description: "Verify your AcceleratorX certificate for courses in Product Management, Data Analytics, Generative AI, and Digital Marketing.",
      ogTitle: "AcceleratorX Certificate Verification",
      ogDescription: "Verify and download your AcceleratorX course completion certificate.",
      canonicalUrl: `https://acceleratorx.org${path}`
    };
  }

  // Default metadata for unmatched routes
  return {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/companylogo-new.webp",
    canonicalUrl: "https://acceleratorx.org/"
  };
}
