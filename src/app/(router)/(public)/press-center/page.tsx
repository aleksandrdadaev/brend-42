import type { Metadata } from 'next'
import { FC } from 'react'

import { PressCenter } from '@/screens/press-center'

const title: string = 'Пресс-центр'
const description: string =
	'Узнайте последние новости конкурса, будьте в курсе всех событий.'
const url: string = '/press-center'
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
	return <PressCenter />
}

export default page
