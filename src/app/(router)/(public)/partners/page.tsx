import type { Metadata } from 'next'
import { FC } from 'react'

import { Partners } from '@/screens/partners'

const title: string = 'Партнеры'
const description: string = 'Партнеры конкурса.'
const url: string = '/partners'
export const metadata: Metadata = {
	title: title,
	description: description,
	alternates: {
		canonical: url,
	},

	openGraph: {
		title: title,
		description: description,
		url: url,
	},
}

const page: FC = () => {
	return <Partners />
}

export default page
