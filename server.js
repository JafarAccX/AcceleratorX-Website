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
        let metadataModule;
        if (!isProduction && vite) {
          metadataModule = await vite.ssrLoadModule('/src/utils/metadata.ts');
        } else {
          metadataModule = await import('./dist/server/utils/metadata.js');
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
          canonicalUrl: `https://acceleratorx.org${url}`
        };
      }
      
      // Replace the existing meta tags with page-specific ones
      let html = template
        // Replace title
        .replace(/<title>.*?<\/title>/, `<title>${pageMetadata.title}</title>`)
        // Replace meta name="title"
        .replace(/<meta name="title"[^>]*>/g, `<meta name="title" content="${pageMetadata.ogTitle}" />`)
        // Replace meta name="description"
        .replace(/<meta name="description"[^>]*>/g, `<meta name="description" content="${pageMetadata.description}" />`)
        // Replace Open Graph tags
        .replace(/<meta property="og:title"[^>]*>/g, `<meta property="og:title" content="${pageMetadata.ogTitle}" />`)
        .replace(/<meta property="og:description"[^>]*>/g, `<meta property="og:description" content="${pageMetadata.ogDescription}" />`)
        .replace(/<meta property="og:url"[^>]*>/g, `<meta property="og:url" content="${pageMetadata.canonicalUrl}" />`)
        .replace(/<meta property="og:image"[^>]*>/g, `<meta property="og:image" content="https://acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />`)
        // Replace Twitter tags
        .replace(/<meta property="twitter:title"[^>]*>/g, `<meta property="twitter:title" content="${pageMetadata.ogTitle}" />`)
        .replace(/<meta property="twitter:description"[^>]*>/g, `<meta property="twitter:description" content="${pageMetadata.ogDescription}" />`)
        .replace(/<meta property="twitter:url"[^>]*>/g, `<meta property="twitter:url" content="${pageMetadata.canonicalUrl}" />`)
        .replace(/<meta property="twitter:image"[^>]*>/g, `<meta property="twitter:image" content="https://acceleratorx.org${pageMetadata.ogImage || '/companylogo-new.webp'}" />`)
      
      // Add canonical link after viewport meta tag
      const viewportIndex = html.indexOf('<meta name="viewport"');
      if (viewportIndex !== -1) {
        const insertAfter = html.indexOf('>', viewportIndex) + 1;
        html = html.slice(0, insertAfter) + 
               `\n    <link rel="canonical" href="${pageMetadata.canonicalUrl}" />` + 
               html.slice(insertAfter);
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
  const port = process.env.PORT || 7000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
})
