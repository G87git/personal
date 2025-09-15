import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg} id="featured-projects" ariaLabel="Featured web and mobile projects showcase">	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Web and Mobile"
					subTitle="Focused on the experience, driven by the engineering."
					headingLevel="h2"
					id="featured-projects-title"
				/>
				<section aria-labelledby="featured-projects-title">
					{
					content.map( (data, index) => {
						return (
							<FeaturedProject content={data} index={index} key={index} />
						)
					})
					}
				</section>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}