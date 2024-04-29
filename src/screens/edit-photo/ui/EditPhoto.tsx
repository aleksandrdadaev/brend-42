import { FC } from 'react'

import { AddPhotosToAlbumForm } from '@/widgets/add-photos-to-album-form'
import { EditAlbumNameForm } from '@/widgets/edit-album-name-form'
import { ManagePhotosList } from '@/widgets/manage-photos-list'

import styles from './EditPhoto.module.scss'

export const EditPhoto: FC = () => {
	return (
		<main className={styles.wrapper}>
			<EditAlbumNameForm />
			<AddPhotosToAlbumForm />
			<ManagePhotosList />
		</main>
	)
}
