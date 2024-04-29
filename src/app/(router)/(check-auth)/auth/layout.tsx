import { FC, PropsWithChildren } from 'react'

import { AuthLayout } from '@/screens/auth-layout'

const layout: FC<PropsWithChildren> = ({ children }) => {
	return <AuthLayout>{children}</AuthLayout>
}

export default layout
