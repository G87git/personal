// Next.js API route to generate sitemap.xml dynamically
// Save this as 'pages/api/sitemap.js'

export default function handler(req, res) {
    const baseUrl = "https://dibrilnzangmene.com/";

    // Define URLs for the sitemap
    const pages = [
        "/",
        "/projects",
        "/articles",
        "/case-studies",
        "/contact",
    ];

    // Generate sitemap content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map((page) => {
            return `
            <url>
                <loc>${baseUrl}${page}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>`;
        })
        .join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
}
