import { Metadata } from 'next'
import { FC } from 'react'

import { Policy } from '@/screens/policy'

const title: string = 'Политика'
const url: string = '/policy'
export const metadata: Metadata = {
	title: title,
	alternates: {
		canonical: url,
	},
	robots: 'noindex',
	openGraph: {
		title: title,
		url: url,
	},
}

const page: FC = () => {
	return <Policy />
}

export default page
