'use client'

import Image from 'next/image'
import { FC, useContext } from 'react'

import { useDeletePhotosFromAlbum } from '@/features/delete-photos-from-album'
import { useGetAlbum } from '@/features/get-album'

import { ManageButtons } from '@/entities/manage-buttons'

import { getImageUrl } from '@/shared/config/api.config'
import { IdContext } from '@/shared/lib/utils/context.util'
import DeleteButton from '@/shared/ui/manage-buttons/DeleteButton'

import styles from './List.module.scss'

const List: FC = () => {
	const id = useContext(IdContext)
	const { album, isLoading, isSuccess } = useGetAlbum(id)
	const { isPending, mutate } = useDeletePhotosFromAlbum()
	return (
		<div className={styles.list}>
			{isLoading && <span className={styles.loading}>Загрузка...</span>}
			{isSuccess &&
				album?.photosPath.map((photo, index) => (
					<div className={styles.img} key={index}>
						<Image src={getImageUrl(photo)} alt='Фото' fill />
						<ManageButtons>
							<DeleteButton
								clickHandler={() => mutate({ id, index })}
								disabled={isPending}
							/>
						</ManageButtons>
					</div>
				))}
		</div>
	)
}

export default List
