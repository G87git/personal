// next.config.js
module.exports = {
	reactStrictMode: true,
	output: 'export',
	env: {
		dir: '/',
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: 'ditnzangmene-89ev8hffs-g87gits-projects.vercel.app'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**'
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**'
			},
			// Add any other hostnames you need
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},


	
}
