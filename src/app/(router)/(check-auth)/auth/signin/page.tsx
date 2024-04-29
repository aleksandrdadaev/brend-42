import { Metadata } from 'next'
import { FC } from 'react'

import { SignIn } from '@/screens/sign-in'

export const metadata: Metadata = {
	title: 'Вход',
}

const page: FC = () => {
	return <SignIn />
}

export default page
