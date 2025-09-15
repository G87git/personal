import Color from '../../components/utils/page.colors.util'
import Contact from '../../components/sections/contact'
import SEO, { generateStructuredData } from '../../components/utils/seo.util'

import colors from '../../content/case-studies/_colors.json'
import settings from '../../content/_settings.json'

//
export default function ContactMe({ }) {
	return (
		<>
			<SEO 
				title="Contact - Dibril Nzangmene | Get In Touch"
				description="Get in touch with Dibril Nzangmene for web development projects, technical writing collaborations, or freelance opportunities."
				keywords="contact Dibril Nzangmene, hire web developer, freelance developer, technical writer for hire, web development services"
				canonical="/contact-me"
				ogImage="/img/og-contact.jpg"
				structuredData={generateStructuredData.contact()}
			/>
			<Color colors={colors} />
			<Contact />
		</>
	)
}