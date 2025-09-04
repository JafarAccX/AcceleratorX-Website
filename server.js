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

      const { html: appHtml } = render(url, {})
      
      // Import and use the metadata function to get page-specific data
      let pageMetadata;
      try {
        const metadataModule = await vite.ssrLoadModule('/src/utils/metadata.ts');
        pageMetadata = metadataModule.getPageMetadata(url);
      } catch (e) {
        // Fallback metadata if import fails
        pageMetadata = {
          title: "AcceleratorX | Learn Product, AI & Data Skills",
          description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
          ogTitle: "AcceleratorX - Future Skills for Career Growth",
          ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
          ogImage: "/companylogo-new.webp",
          canonicalUrl: `https://acceleratorx.org${url}`
        };
      }
      
      // Inject meta tags into template
      const metaTags = `
        <meta name="description" content="${pageMetadata.description}" />
        <link rel="canonical" href="${pageMetadata.canonicalUrl}" />
        <meta property="og:title" content="${pageMetadata.ogTitle}" />
        <meta property="og:description" content="${pageMetadata.ogDescription}" />
        <meta property="og:image" content="https://acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />
        <meta property="og:url" content="${pageMetadata.canonicalUrl}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${pageMetadata.ogTitle}" />
        <meta name="twitter:description" content="${pageMetadata.ogDescription}" />
        <meta name="twitter:image" content="https://acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />
      `
      
      // Replace the title and add meta tags
      let html = template.replace(/<title>.*?<\/title>/, `<title>${pageMetadata.title}</title>`)
      
      // Add meta tags before </head>
      const headEndIndex = html.indexOf('</head>')
      if (headEndIndex !== -1) {
        html = html.slice(0, headEndIndex) + metaTags + html.slice(headEndIndex)
      }
      
      // Replace the SSR outlet
      html = html.replace(`<!--ssr-outlet-->`, appHtml)

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
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
})
