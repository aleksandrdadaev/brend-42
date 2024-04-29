import { FC } from 'react'

import { ManageAlbumsButtons } from '@/widgets/manage-albums-buttons'
import { PhotoGallery } from '@/widgets/photo-gallery'

import styles from './ManagePhotos.module.scss'

export const ManagePhotos: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageAlbumsButtons />
			<PhotoGallery />
		</main>
	)
}
