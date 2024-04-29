import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '*',
			disallow: ['/policy', '/user-agreement', '/kuztppManagePanel/'],
		},
		sitemap: [
			`${process.env.REACT_APP_URL}/sitemap.xml`,
			`${process.env.REACT_APP_URL}/press-center/[slug]/sitemap.xml`,
		],
	}
}
