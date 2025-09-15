import Head from 'next/head';

/**
 * SEO Component for dynamic meta tags
 * @param {Object} props - SEO configuration
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (default: website)
 * @param {Object} props.structuredData - JSON-LD structured data
 * @returns {JSX.Element} Head component with meta tags
 */
export default function SEO({
    title = 'Dibril Nzangmene - Web Developer & Writer',
    description = 'Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects.',
    keywords = 'web developer, technical writer, portfolio, freelance, programming, Dibril Nzangmene',
    canonical,
    ogImage = 'https://media.licdn.com/dms/image/v2/D4E03AQHgP9jKBS01UQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696525392648?e=1760572800&v=beta&t=Qw1aeLKIcrTnKXnMAMTnFmai1UeuS2MQXgsETj9udu4',
    ogType = 'website',
    structuredData,
    noIndex = false
}) {
    const baseUrl = 'https://dibrilnzangmene.com';
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Dibril Nzangmene" />
            
            {/* Robots */}
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            
            {/* Canonical URL */}
            <link rel="canonical" href={fullCanonical} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="Dibril Nzangmene Portfolio" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            <meta name="twitter:creator" content="@dibrilnzangmene" />
            
            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            )}
        </Head>
    );
}

/**
 * Generate structured data for different page types
 */
export const generateStructuredData = {
    // Homepage/Portfolio structured data
    portfolio: () => ({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dibril Nzangmene",
        "url": "https://dibrilnzangmene.com",
        "sameAs": [
            "https://www.linkedin.com/in/dibrilnzangmene/",
            "https://github.com/dibrilnzangmene/",
            "https://twitter.com/dibrilnzangmene/"
        ],
        "jobTitle": "Web Developer & Technical Writer",
        "description": "Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects.",
        "knowsAbout": [
            "Web Development",
            "Technical Writing",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js"
        ]
    }),
    
    // Projects page structured data
    projects: () => ({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Projects - Dibril Nzangmene",
        "description": "A collection of web development and technical projects by Dibril Nzangmene",
        "url": "https://dibrilnzangmene.com/projects",
        "author": {
            "@type": "Person",
            "name": "Dibril Nzangmene"
        }
    }),
    
    // Articles page structured data
    articles: () => ({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Articles - Dibril Nzangmene",
        "description": "Technical articles and insights by Dibril Nzangmene",
        "url": "https://dibrilnzangmene.com/articles",
        "author": {
            "@type": "Person",
            "name": "Dibril Nzangmene"
        }
    }),
    
    // Contact page structured data
    contact: () => ({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact - Dibril Nzangmene",
        "description": "Get in touch with Dibril Nzangmene for web development and technical writing projects",
        "url": "https://dibrilnzangmene.com/contact"
    })
};