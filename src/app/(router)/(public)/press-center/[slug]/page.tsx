import type { Metadata } from 'next'

import { News } from '@/screens/news'

import { NewsService } from '@/shared/api/services/news.service'
import { getImageUrl } from '@/shared/config/api.config'

interface IProps {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({
	params,
}: IProps): Promise<Metadata> => {
	const {
		data: { data: news },
	} = await NewsService.getBy('', params.slug)
	const title: string = news.name
	const description: string = news.newsText
	const url: string = `/press-center/${news.slug}`
	return {
		title: title,
		description: description,
		alternates: {
			canonical: url,
		},

		openGraph: {
			title: title,
			description: description,
			url: url,
			images: getImageUrl(news.photoPath),
		},
	}
}

const page = async ({ params }: { params: { slug: string } }) => {
	const {
		data: { data: news },
	} = await NewsService.getBy('', params.slug)

	return <News news={news} />
}

export default page
