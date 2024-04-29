import type { Metadata } from 'next'
import { FC } from 'react'

import { AboutCompetition } from '@/screens/about-competition'

const title: string = 'О конкурсе'
const description: string =
	'Информация о проводимом конкурсе. Календарь мероприятий.'
const url: string = '/about-competition'
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
	return <AboutCompetition />
}

export default page
