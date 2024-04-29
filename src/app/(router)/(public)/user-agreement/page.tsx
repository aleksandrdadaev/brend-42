import { Metadata } from 'next'
import { FC } from 'react'

import { UserAgreement } from '@/screens/user-agreement'

const title: string = 'Пользовательское соглашение'
const url: string = '/user-agreement'
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
	return <UserAgreement />
}

export default page
