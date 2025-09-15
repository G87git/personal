
import Container from '../structure/container';

// Section scss
import section from '../../styles/blocks/section.title.module.scss'

/**
 * Section header component
 * 
 * @param {string} preTitle - Pre-title text
 * @param {string} title - Main section title
 * @param {string} subTitle - Subtitle/description
 * @param {string} headingLevel - Heading level (h2, h3, h4, etc.)
 * @param {string} id - Unique identifier for the section
 * @returns JSX element
 */
export default function SectionTitle({ preTitle, title, subTitle, headingLevel = 'h2', id }) {
	const HeadingTag = headingLevel;
	const sectionId = id || title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
	
	return (
		<header className={`${section.title}`}>
			{preTitle && <p className="section-pretitle" aria-label="Section category">{preTitle}</p>}
			<HeadingTag id={sectionId}>{title}</HeadingTag>
			{subTitle && <p className="subtitle" aria-describedby={sectionId}>{subTitle}</p>}
		</header>
	)

}