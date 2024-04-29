import type { Metadata } from 'next'
import { FC } from 'react'

import { Voting } from '@/screens/voting'

const title: string = 'Голосование'
const description: string =
	'Проголосуйте за участников конкурса: выберите номинацию и оставьте свой голос.'
const url: string = '/voting'
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
	return <Voting />
}

export default page
