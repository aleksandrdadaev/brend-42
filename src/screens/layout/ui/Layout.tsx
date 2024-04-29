import { FC, PropsWithChildren } from 'react'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import './Layout.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
