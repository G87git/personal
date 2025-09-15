import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
			{/* <a href="#main-content" className="skip-link">Skip to main content</a> */}
			<Navbar />
			<div id="main-content" role="main">{children}</div>
			<Footer />
		</>
	)
}