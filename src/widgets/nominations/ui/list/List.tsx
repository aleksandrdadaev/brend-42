'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useContext } from 'react'

import { useGetAllNominations } from '@/features/get-all-nominations'
import { GoToInvitationForm } from '@/features/go-to-invitation-form'

import { LoaderNomination, Nomination } from '@/entities/nomination'

import { ManageContext } from '@/shared/lib/utils/context.util'

import styles from './List.module.scss'

const List: FC = () => {
	const pathname = usePathname()
	const { isLoading, isSuccess, nominations, totalNominations } =
		useGetAllNominations()
	const manage = useContext(ManageContext)
	const isButton: boolean = pathname !== '/participants' && !manage
	const loadings = new Array(3).fill('')
	return (
		<div className={styles.list}>
			{isLoading &&
				loadings.map((el, index) => <LoaderNomination key={index} />)}
			{isSuccess &&
				nominations?.map(nomination => <Nomination nomination={nomination} />)}
			{isButton && (
				<div className={styles.link}>
					<Link href='/voting'>Голосуй за бренд Кузбасса</Link>
				</div>
			)}
		</div>
	)
}

export default List
