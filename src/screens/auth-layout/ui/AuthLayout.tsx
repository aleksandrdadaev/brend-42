'use client'

import { FC, PropsWithChildren } from 'react'

import { AuthHeader } from '@/widgets/auth-header'

import { useAuthRedirect } from '@/features/auth-redirect'

import styles from './AuthLayout.module.scss'

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	useAuthRedirect(false)
	return (
		<body className={styles.body}>
			<AuthHeader />
			{children}
		</body>
	)
}
