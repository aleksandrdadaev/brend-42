import type { Metadata } from 'next'
import { FC } from 'react'

import { Participants } from '@/screens/participants'

const title: string = 'Участникам'
const description: string = 'Информация для желающих поучаствовать, участники.'
const url: string = '/participants'
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
	return <Participants />
}
export default page
