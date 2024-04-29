'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllVideos } from '@/features/delete-all-videos'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageVideosButtons.module.scss'

export const ManageVideosButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllVideos()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Видео</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/videos/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все видео
				</Button>
			</div>
		</section>
	)
}
