import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'
import SEO, { generateStructuredData } from '../components/utils/seo.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<SEO 
				title="Dibril Nzangmene - Web Developer & Technical Writer"
				description="Portfolio showcasing web development projects, technical writing, and programming expertise. Specializing in React, Next.js, and modern web technologies."
				keywords="web developer, technical writer, portfolio, React, Next.js, JavaScript, freelance developer, Dibril Nzangmene"
				canonical="/"
				ogImage="/img/og-home.jpg"
				structuredData={generateStructuredData.portfolio()}
			/>
			<Color colors={colors} />
			<Hero />
			<Looking />
			<FeaturedProjects />
			<About />
			<Technical />
			<Career />
		</>
	);
}