'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllNominations } from '@/features/delete-all-nominations'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageNominationsButtons.module.scss'

export const ManageNominationsButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllNominations()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Номинации конкурса</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/nominations/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все номинации
				</Button>
			</div>
		</section>
	)
}
