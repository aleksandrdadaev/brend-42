'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllPartners } from '@/features/delete-all-partners'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManagePartnersButtons.module.scss'

export const ManagePartnersButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllPartners()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Партнеры конкурса</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/partners/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить всех партнеров
				</Button>
			</div>
		</section>
	)
}
