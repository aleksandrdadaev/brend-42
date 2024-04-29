import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import '@/app/styles/global.scss'

import GoogleAnalytics from '@/shared/providers/GoogleAnalytics'
import MainProvider from '@/shared/providers/MainProvider'
import YandexMetrika from '@/shared/providers/YandexMetrika'

const inter = Inter({
	weight: ['300', '400', '500', '600', '800', '900'],
	style: 'normal',
	variable: '--font-inter',
	subsets: ['cyrillic'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			style={{
				fontFamily: inter.style.fontFamily,
			}}
		>
			<body>
				<MainProvider>{children}</MainProvider>
				<Suspense>
					<YandexMetrika />
				</Suspense>
				<GoogleAnalytics />
			</body>
		</html>
	)
}
