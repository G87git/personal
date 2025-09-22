import { useState, useEffect } from "react"

import Recent from '../../components/sections/articles/recent'
import Color from '../../components/utils/page.colors.util'
import SEO, { generateStructuredData } from '../../components/utils/seo.util'

import colors from '../../content/articles/_colors.json'
import settings from '../../content/_settings.json'

export default function Articles({ mediumArticles }) {
    return (
        <>
            <SEO 
                title="Articles - Dibril Nzangmene | Technical Writing & Insights"
                description="Read technical articles and insights on web development, programming best practices, and technology trends by Dibril Nzangmene."
                keywords="technical writing, web development articles, programming insights, JavaScript tutorials, React guides, Dibril Nzangmene blog"
                canonical="/articles"
                ogImage="/img/og-articles.jpg"
                structuredData={generateStructuredData.articles()}
            />
            <Color colors={colors} />
            <Recent mediumArticles={mediumArticles} />
        </>
    )
}

// This gets called at build time
export async function getStaticProps() {
    try {
        const username = settings.username.medium
        const mediumRSS = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`)
        const mediumArticles = await mediumRSS.json()

        return { 
            props: { mediumArticles }
        }
    } catch (error) {
        console.error('Error fetching Medium articles:', error)
        return {
            props: { mediumArticles: { items: [] } }
        }
    }
}
