import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

import { ManageLayout } from '@/screens/manage-layout'

export const metadata: Metadata = {
	title: 'Админ панель',
}
const layout: FC<PropsWithChildren> = ({ children }) => {
	return <ManageLayout>{children}</ManageLayout>
}

export default layout
