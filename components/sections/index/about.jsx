// Core packages
import Image from 'next/image';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block';
import SectionGridBg from '../../blocks/section.grid.block';

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block';
import CopyBlock from '../../blocks/about.copy.block';

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

// Links
import AboutImage from '../../../public/img/logo.jpeg';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="As an experienced and innovative web developer with a focus on fintech, I specialize in PHP, WordPress, and JavaScript. My skill set includes SEO-focused web design and development, and I have a proven track record of delivering high-quality websites and web applications."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image
						src={AboutImage}
						alt='MyProfileImage'
						  placeholder="blur"
  blurDataURL="/_next/static/media/logo-blur.jpg"
						/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Essential Soft Skills for Success"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical expertise, I possess strong communication, project management, and design thinking skills. I am adept at building and customizing WordPress templates, developing with React/NextJS, and implementing GraphQL. Fluent in English and French, I am ready to bring my diverse skill set to new challenges."
						/>
						<BadgesBlock 
							title="Research and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="I excel in planning the architecture of projects, focusing on user research, digital strategy, design systems, and product strategy. My experience allows me to create comprehensive solutions that meet user needs and business goals."
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
];
