// Next.js API route to generate sitemap.xml dynamically
// Save this as 'pages/api/sitemap.js'

export default function handler(req, res) {
    const baseUrl = "https://dibrilnzangmene.com";

    // Define URLs for the sitemap with specific priorities and change frequencies
    const pages = [
        {
            url: "/",
            changefreq: "monthly",
            priority: "1.0",
            lastmod: new Date().toISOString()
        },
        {
            url: "/projects",
            changefreq: "weekly",
            priority: "0.9",
            lastmod: new Date().toISOString()
        },
        {
            url: "/articles",
            changefreq: "weekly",
            priority: "0.8",
            lastmod: new Date().toISOString()
        },
        {
            url: "/contact-me",
            changefreq: "yearly",
            priority: "0.7",
            lastmod: new Date().toISOString()
        }
    ];

    // Generate sitemap content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pages
        .map((page) => {
            return `
    <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`;
        })
        .join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    res.status(200).send(sitemap);
}
