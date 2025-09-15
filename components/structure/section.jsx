// Section structure scss
import sections from '../../styles/structure/section.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯         
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @param {string}	as semantic HTML element type (section, article, main, aside, etc.)
 * @param {string}	id unique identifier for the section
 * @param {string}	ariaLabel accessibility label for screen readers
 * @returns {jsx}	<Section />
 */
export default function Section({ classProp, children, as = 'section', id, ariaLabel }) {

	const _className = classProp ? classProp : '';
	const Element = as;

	return (
		<Element 
			className={`${sections.default} ${_className}`}
			id={id}
			aria-label={ariaLabel}
		>
			{children}
		</Element>
	);
}