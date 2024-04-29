'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllEvents } from '@/features/delete-all-events'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageCalendarButtons.module.scss'

export const ManageCalendarButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllEvents()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>События в календаре</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/event/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все события
				</Button>
			</div>
		</section>
	)
}
