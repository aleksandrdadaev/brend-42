'use client'

import { FC, PropsWithChildren, useState } from 'react'

import { ManageHeader } from '@/widgets/manage-header'
import { ManageSidebar } from '@/widgets/manage-sidebar'

import { useAuthRedirect } from '@/features/auth-redirect'

import { ManageContext } from '@/shared/lib/utils/context.util'
import ToastProvider from '@/shared/providers/ToastProvider'

import styles from './ManageLayout.module.scss'

export const ManageLayout: FC<PropsWithChildren> = ({ children }) => {
	useAuthRedirect(true)
	const [manage, setManage] = useState<boolean>(true)
	return (
		<body className={styles.body}>
			<ToastProvider>
				<ManageHeader />
				<ManageSidebar />
				<ManageContext.Provider value={manage}>
					{children}
				</ManageContext.Provider>
			</ToastProvider>
		</body>
	)
}
