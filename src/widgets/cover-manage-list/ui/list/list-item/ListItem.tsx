'use client'

import Image from 'next/image'
import { FC } from 'react'
import { toast } from 'react-toastify'

import { useDeleteCoverPhoto } from '@/features/delete-cover-photo'

import { ManageButtons } from '@/entities/manage-buttons'

import DeleteButton from '@/shared/ui/manage-buttons/DeleteButton'
import QueryLoader from '@/shared/ui/query-loader/QueryLoader'

import styles from './ListItem.module.scss'

const ListItem: FC<{ photo: string; index: number }> = ({ index, photo }) => {
	const { isPending, mutate } = useDeleteCoverPhoto()

	return (
		<div className={styles.wrapper}>
			<ManageButtons>
				<DeleteButton clickHandler={() => mutate(index)} disabled={isPending} />
			</ManageButtons>

			<div className={styles.img}>
				<Image src={photo} alt='Обложка' fill />
			</div>
			{isPending && <QueryLoader />}
		</div>
	)
}

export default ListItem
