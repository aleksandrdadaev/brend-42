import type { Metadata } from 'next'
import { FC } from 'react'

import { Contacts } from '@/screens/contacts'

const title: string = 'Контакты'
const description: string =
	'Узнайте, где можно подать заявку на конкурс, офисы в городе Новокузнецк, Кемерово, контактные данные.'
const url: string = '/contacts'
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
	return <Contacts />
}

export default page
