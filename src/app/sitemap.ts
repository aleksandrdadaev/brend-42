import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.REACT_APP_URL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/about-competition`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/contacts`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/participants`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/partners`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/policy`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${process.env.REACT_APP_URL}/press-center`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/user-agreement`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${process.env.REACT_APP_URL}/voting`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.REACT_APP_URL}/winners`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	]
}
