'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllNews } from '@/features/delete-all-news'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageNewsButtons.module.scss'

export const ManageNewsButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllNews()

	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Новости</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/news/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все новости
				</Button>
			</div>
		</section>
	)
}
