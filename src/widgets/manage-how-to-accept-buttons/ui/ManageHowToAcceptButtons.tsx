'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllHowParticipates } from '@/features/delete-all-how-participates'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageHowToAcceptButtons.module.scss'

export const ManageHowToAcceptButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllHowParticipates()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Этапы принятия участия</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/how-to-accept/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все этапы
				</Button>
			</div>
		</section>
	)
}
