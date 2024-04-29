'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllOrganizers } from '@/features/delete-all-organizers'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageAboutCompetitionButtons.module.scss'

export const ManageAboutCompetitionButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllOrganizers()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Организаторы конкурса</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/organizers/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить всех организаторов
				</Button>
			</div>
		</section>
	)
}
