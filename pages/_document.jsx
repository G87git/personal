/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Enhance SEO and add custom scripts in <Head>
 *
 * @returns <Html>
 */
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Primary Meta Tags */}
                <meta charSet="UTF-8" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                {/* <title name="title" content="Dibril Nzangmene - Web Developer & Writer" ></title> */}
                <meta name="title" content="Dibril Nzangmene - Web Developer & Writer" />
                <meta name="description" content="Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects." />
                <meta name="keywords" content="web developer, technical writer, portfolio, freelance, programming, Dibril Nzangmene" />
                <meta name="author" content="Dibril Nzangmene" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dibrilnzangmene.com" />
                <meta property="og:title" content="Dibril Nzangmene - Web Developer & Writer" />
                <meta property="og:description" content="Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects." />
                <meta property="og:image" content="https://dibrilnzangmene.com/og-image.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dibrilnzangmene.com" />
                <meta property="twitter:title" content="Dibril Nzangmene - Web Developer & Writer" />
                <meta property="twitter:description" content="Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects." />
                <meta property="twitter:image" content="https://dibrilnzangmene.com/twitter-image.jpg" />

                {/* Structured Data (JSON-LD) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                            "description": "Portfolio of Dibril Nzangmene, showcasing web development and technical writing projects."
                        }),
                    }}
                />

                {/* Favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
