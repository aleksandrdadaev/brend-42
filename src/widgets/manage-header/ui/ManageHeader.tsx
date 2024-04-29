'use client'

import Link from 'next/link'
import { FC } from 'react'

import { useLogout } from '@/features/logout'

import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './ManageHeader.module.scss'

export const ManageHeader: FC = () => {
	const { isPending, mutate } = useLogout()
	return (
		<header className={styles.header}>
			<Link href='/'>На главную</Link>
			<button onClick={() => mutate()}>
				{isPending ? <MiniLoader /> : 'Выйти'}
			</button>
		</header>
	)
}
