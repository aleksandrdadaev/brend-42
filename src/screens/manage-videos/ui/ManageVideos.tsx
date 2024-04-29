import { FC } from 'react'

import { ManageVideosButtons } from '@/widgets/manage-videos-buttons'
import { VideoGallery } from '@/widgets/video-galllery'

import styles from './ManageVideos.module.scss'

export const ManageVideos: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageVideosButtons />
			<VideoGallery />
		</main>
	)
}
