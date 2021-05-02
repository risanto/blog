const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
    const pages = await globby([
        'pages/**/*.jsx',
        'pages/**/*.md',
        '!pages/**/_*.jsx',
        '!pages/**/[slug].jsx'
    ])

    const pagesMap = pages
        .map(page => {
            const path = page
                .replace('pages', '')
                .replace('.jsx', '')
                .replace('.md', '')
            const route = path === '/index' ? '' : path
            return `
              <url>
                  <loc>${`https://www.risan.dev${route}`}</loc>
              </url>
          `
        })
        .join('')

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pagesMap}
        </urlset>
  `

    fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()