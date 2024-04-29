'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllWinners } from '@/features/delete-all-winners'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageWinnersButtons.module.scss'

export const ManageWinnersButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllWinners()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Каталоги победителей конкурса</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/winners/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все каталоги
				</Button>
			</div>
		</section>
	)
}
