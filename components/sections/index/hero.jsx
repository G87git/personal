import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';

import Icon from '../../utils/icon.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';

import content from '../../../content/index/hero.json';
import Link from 'next/link';

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
			<Section classProp={`${hero.section}`} as="main" id="hero" ariaLabel="Hero section with introduction">
				<Container spacing={'VerticalXXXL'}>
					<TypeAnimation
						className={`${hero.preHeader}`}
						sequence={[
							content.intro.startDelay,
							() => {
								setTypingStatus('typing');
							},
							content.intro.start, 
							() => {
								setTypingStatus('typed');
							},
							content.intro.deleteDelay,
							() => {
								setTypingStatus('deleting');
							},
							content.intro.end,
							() => {
								setTypingStatus('deleted');
							},
							content.intro.restartDelay,
						]}
						speed={content.intro.speed}
						deletionSpeed={content.intro.deletionSpeed}
						wrapper={content.intro.wrapper}
						repeat={Infinity}
						aria-live="polite"
					/>
					<header>
						<h1 className={hero.header}>{content.header.name}</h1>
						<p className={`${hero.header} ${hero.primaryDim}`} role="doc-subtitle">{content.header.usp}</p>
					</header>
					<section aria-labelledby="hero-description">
						<p id="hero-description" className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
							{content.paragraph}
						</p>
					</section>
					<section aria-labelledby="hero-actions">
						<h2 id="hero-actions" className="sr-only">Contact Actions</h2>
						<button
							className={`button ${button.primary}`}
							onClick={() => window.open('mailto:ditdibril@gmail.com', '_blank')}
							aria-label="Send email to Dibril Nzangmene"
						>
							{content.buttons.primary.title}
						</button>
						<Link
							href="/DIBRILNZANGMENECV.pdf"
							download="DibrilNzangmeneCV.pdf"
							target={'_blank'}
							rel="noopener noreferrer"
							aria-label="Download Dibril Nzangmene's resume as PDF"
						>
							<button
								className={`button ${button.secondary}`}
								tabIndex={-1}
							>
								{content.buttons.secondary.title}
							</button>
						</Link>
					</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	);
}