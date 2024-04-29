import { MetadataRoute } from 'next'

import { NewsService } from '@/shared/api/services/news.service'

export const revalidate = 3600 * 24

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const {
		data: { data },
	} = await NewsService.getAll()
	const news: MetadataRoute.Sitemap = data.news.map(item => ({
		url: `${process.env.REACT_APP_URL}/press-center/${item.slug}`,
		lastModified: item.newsDate,
		changeFrequency: 'yearly',
		priority: 0.8,
	}))
	return news
}
