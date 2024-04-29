import { Metadata, Viewport } from 'next'
import { FC, PropsWithChildren } from 'react'

import { Layout } from '@/screens/layout'

const title: string = 'Региональный конкурс «Бренд Кузбасса»'
const description: string =
	'«Бренд Кузбасса» - конкурс, направленный на повышение конкурентоспособности и узнаваемости торговых марок регионального бизнеса. В конкурсе ежегодно участвуют предприятия Кузбасса, заинтересованные в продвижении своих брендов и расширении рынков сбыта. Оставь неповторимый след в истории кузбасского бизнеса!'

export const viewport: Viewport = {
	themeColor: '#A3C03E',
}

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: [
		'конкурс Кузбасса',
		'Кузбасские торговые марки',
		'торговые марки в Кузбассе',
		'локальные Кузбасские бренды',
		'брэнды Кузбасса',
		'Брэнд Кузбасса',
		'Бренд Кузбасса',
		'региональный конкурс',
		'бизнес Кузбасса',
	],
	metadataBase: new URL(`${process.env.REACT_APP_URL}`),

	referrer: 'strict-origin',
	icons: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			url: '/favicon.ico',
		},
		{
			rel: 'shortcut icon',
			type: 'image/x-icon',
			url: '/favicon.ico',
		},
		{
			rel: 'icon',
			type: 'image/png',
			url: '/favicon-16x16.png',
			sizes: '16x16',
		},
		{
			rel: 'icon',
			type: 'image/png',
			url: '/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png',
		},
	],
	alternates: {
		canonical: '/',
	},
	robots: 'all',

	openGraph: {
		title: title,
		siteName: 'Бренд-42',
		description: description,
		type: 'website',
		url: '/',
		images: '/android-chrome-512x512.png',
		locale: 'ru_RU',
	},
}

const layout: FC<PropsWithChildren> = ({ children }) => {
	return <Layout>{children}</Layout>
}

export default layout
