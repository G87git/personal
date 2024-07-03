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

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="As an experienced Web Developer, I create impactful digital experiences using a wide range of technologies and tools."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Technical Expertise"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a solid foundation in both front-end and back-end development, I bring a comprehensive approach to every project. I continuously learn and adapt to the latest industry trends to deliver high-quality solutions."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I Love to Work With" 
							copy="Throughout my career, I have gained proficiency in a variety of software tools that enhance my development and design workflow. Here are some of the software programs I frequently use."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I Excel In" 
							copy="I thrive on solving complex problems with code, whether it's building responsive front-end interfaces or robust back-end systems. Here are some of the technologies I excel in."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			<SectionGridBg gridSize={4}/>
		</Section>
	);
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'canva', 		name: 'Canva', 				type: 'devicon' },
	{ key: 'postman', 		name: 'Postman', 			type: 'devicon' },
	{ key: 'github',        name: 'GitHub',            type: 'devicon' },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
];

const tech = [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs',        name: 'NodeJS',             type: 'devicon' },
	{ key: 'git', 			name:'GIT', 				type:'devicon'},
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'tailwindcss', 	name: 'TAILWINDCSS', 		type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'graphql', 		name: 'GraphQL', 			type: 'devicon' },
	{ key: 'flutter', 		name: 'Flutter', 			type: 'devicon' },
];
