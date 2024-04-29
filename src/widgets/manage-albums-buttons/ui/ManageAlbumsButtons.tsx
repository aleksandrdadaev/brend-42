'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteAllAlbums } from '@/features/delete-all-albums'

import { getManageUrl } from '@/shared/config/url.config'
import Button from '@/shared/ui/button/Button'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageAlbumsButtons.module.scss'

export const ManageAlbumsButtons: FC = () => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteAllAlbums()
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Альбомы</SubTitle>
			<div className={styles.buttons}>
				<Button
					clickHandler={() => push(getManageUrl('/photos/create'))}
					disabled={isPending}
				>
					Добавить
				</Button>
				<Button clickHandler={() => mutate()} del disabled={isPending}>
					Удалить все альбомы
				</Button>
			</div>
		</section>
	)
}
