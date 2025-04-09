
// robots.txt (pages/api/robots.js)
export const robotsHandler = (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(`User-agent: *
Disallow:

Sitemap: https://dibrilnzangmene.com/api/sitemap`);
};

// Add in your API route
export default robotsHandler;
