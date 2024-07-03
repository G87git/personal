
// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={["verticalXXXLrg"]}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="Experienced and innovative Web Developer with a strong background in PHP, WordPress, and JavaScript."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Iwomi Technologies</h3>
								<h4>Front End Web Developer</h4>
								<h4>July 2022 - Present · 1 yr 1 mo</h4>
								<h5>Bonamoussadi, Douala, Cameroon 📍</h5>
								<button className={`${career.remoteButton} ${career.disabled}`}>
									Remote
								</button>
							</span>
							<p>
								Collaborated with a diverse range of clients to deliver bespoke
								web solutions, emphasizing SEO best practices and responsive
								design principles. Developed and maintained websites and web
								applications using PHP, WordPress, and JavaScript. Implemented
								innovative UI/UX designs and ensured optimal performance across
								various devices and screen sizes.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Iwomi Technologies</h3>
									<h4>Junior Front End Developer (Intern)</h4>
									<h4>Nov 2021 - June 2022 · 8 mos</h4>
									<h5>Bonamoussadi, Douala, Cameroon 📍</h5>
									<button className={`${career.onsiteButton} ${career.disabled}`}>
										Onsite
									</button>
								</span>
								<p>
									Collaborated with experienced development teams to create
									visually appealing and user-friendly web applications.
									Implemented responsive and intuitive user interfaces using the
									latest front-end technologies. Assisted in the design and
									execution of user interactions on websites, troubleshooting
									and debugging issues for seamless user experiences across
									various devices and browsers. Stayed abreast of emerging
									technologies and industry trends to contribute fresh ideas to
									the team.
								</p>
								<p>Some key projects completed during this time 👇</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}>
											<span className={career.bullet}></span>Eradicated critical
											data input errors
										</span>
									</li>
									<li>
										Inventory management reporting and automation
										<span className={career.subList}>
											<span className={career.bullet}></span>Decreased
											purchasing labour by ~80%
										</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}>
											<span className={career.bullet}></span>Increased AOV by
											8.3%
										</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}>
											<span className={career.bullet}></span>Decreased Credit
											Card fraud by 98%
										</span>
									</li>
								</ul>
								<Badges
									list={fullStack}
									block="stack"
									fullContainer="fullContainer"
								/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	);
}

const fullStack = [
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "nodejs", name: "NodeJS", type: "devicon" },
	{ key: "react", name: "React", type: "devicon" },
	{ key: "nextjs", name: "NextJS", type: "devicon" },
	{ key: "php", name: "PHP", type: "devicon" },
	{ key: "wordpress", name: "WordPress", type: "devicon" },
	{ key: "woocommerce", name: "WooCommerce", type: "devicon" },
	{ key: "html5", name: "HTML5", type: "devicon" },
	{ key: "css3", name: "CSS3", type: "devicon" },
	{ key: "sass", name: "SASS", type: "devicon" },
	{ key: "git", name: "Git", type: "devicon" },
	{ key: "mysql", name: "MySQL", type: "devicon" },
	{ key: "mongodb", name: "MongoDB", type: "devicon" },
];

const stack = [
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "nodejs", name: "NodeJS", type: "devicon" },
	{ key: "react", name: "React", type: "devicon" },
	{ key: "nextjs", name: "NextJS", type: "devicon" },
	{ key: "php", name: "PHP", type: "devicon" },
	{ key: "wordpress", name: "WordPress", type: "devicon" },
	{ key: "woocommerce", name: "WooCommerce", type: "devicon" },
	{ key: "html5", name: "HTML5", type: "devicon" },
	{ key: "css3", name: "CSS3", type: "devicon" },
	{ key: "sass", name: "SASS", type: "devicon" },
	{ key: "git", name: "Git", type: "devicon" },
	{ key: "mysql", name: "MySQL", type: "devicon" },
	{ key: "mongodb", name: "MongoDB", type: "devicon" },
];
