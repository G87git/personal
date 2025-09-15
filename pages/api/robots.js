
// robots.txt (pages/api/robots.js)
export const robotsHandler = (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    
    const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow specific API endpoints
Allow: /api/sitemap
Allow: /api/robots

# Crawl delay
Crawl-delay: 1

# Sitemap location
Sitemap: https://dibrilnzangmene.com/api/sitemap`;
    
    res.status(200).send(robotsTxt);
};

// Add in your API route
export default robotsHandler;
