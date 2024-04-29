import type { Metadata } from 'next'
import { FC } from 'react'

import { Winners } from '@/screens/winners'

const title: string = 'Победители'
const description: string = 'Победители в различных номинациях.'
const url: string = '/winners'
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
	return <Winners />
}

export default page
