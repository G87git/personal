import Color from '../../components/utils/page.colors.util'
import Contact from '../../components/sections/contact'

import colors from '../../content/case-studies/_colors.json'
import settings from '../../content/_settings.json'

//
export default function ContactMe({ }) {
	return (
		<>
			<Color colors={colors} />
			<Contact />
		</>
	)
}