// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color  from '../../components/utils/page.colors.util'
import SEO, { generateStructuredData } from '../../components/utils/seo.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
			<SEO 
				title="Projects - Dibril Nzangmene | Web Development Portfolio"
				description="Explore my web development projects including React applications, Next.js websites, and full-stack solutions. View live demos and source code."
				keywords="web development projects, React projects, Next.js portfolio, JavaScript applications, full-stack development, Dibril Nzangmene projects"
				canonical="/projects"
				ogImage="/img/og-projects.jpg"
				structuredData={generateStructuredData.projects()}
			/>
			<Color colors={colors} />
			<FeaturedProjects />
			<GitRecentProjects user={user} repos={repos} />
		</>
	)
}

// This gets called at build time
export async function getStaticProps() {
	try {
		const [ gitUserRes, gitReposRes] = await Promise.all( [
			fetch(`https://api.github.com/users/${settings.username.github}`),
			fetch(`https://api.github.com/users/${settings.username.github}/repos`),
		] )
		
		let [ user, repos] = await Promise.all( [
			gitUserRes.json(),
			gitReposRes.json(), 
		] )

		if (user.login) {
			user = [user].map( 
				({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
			)
		}
		
		if (repos.length) {
			repos = repos.map( 
				({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
					const timestamp = Math.floor(new Date(pushed_at) / 1000)
					return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
				}
			)

			repos.sort( (a, b) => b.timestamp - a.timestamp )

			repos = repos.filter( (e, i) => {
				if ( i < 8 && ! e.topics.includes('github-config')) return e
				return false
			})
		}

		if (!repos || !user) { 
			return { 
				props: { repos: [], user: [] }
			}
		}

		return { props: { repos, user } }
	} catch (error) {
		console.error('Error fetching GitHub data:', error)
		return {
			props: { repos: [], user: [] }
		}
	}
}