// Section structure scss
import sections from '../../styles/structure/section.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯         
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */
export default function Section({ classProp, children }) {

	const _className = classProp ? classProp : '';

	return (
		<div className={`${sections.default} ${_className}`}>
			{children}
		</div>
	);
}