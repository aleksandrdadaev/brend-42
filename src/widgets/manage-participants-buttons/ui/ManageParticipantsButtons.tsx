'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllParticipants } from '@/features/delete-all-participants'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageParticipantsButtons.module.scss'

export const ManageParticipantsButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllParticipants()

	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Участники</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/participants/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить всех участников
				</Button>
			</div>
		</section>
	)
}
