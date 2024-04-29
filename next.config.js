/** @type {import('next').NextConfig} */

// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require('next-pwa')({
// 	dest: 'public',
// 	runtimeCaching,
// 	buildExcludes: [/middleware-manifest.json$/],
// })

const securityHeaders = () => [
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
]

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		SERVER_URL: process.env.REACT_SERVER_URL,
		GOOGLE_ANALYTICS: process.env.REACT_GOOGLE_ANALYTICS,
		YANDEX_METRIKA: process.env.REACT_YANDEX_METRIKA,
	},
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		localeDetection: false,
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.REACT_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.REACT_SERVER_URL}/uploads/:path*`,
			},
		]
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders(),
			},
		]
	},
}

module.exports = nextConfig
