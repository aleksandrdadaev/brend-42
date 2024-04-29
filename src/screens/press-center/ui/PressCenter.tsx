import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { News } from '@/widgets/news'
import { PhotoGallery } from '@/widgets/photo-gallery'
import { VideoGallery } from '@/widgets/video-galllery'

import { PageTitle } from '@/entities/page-title'

import styles from './PressCenter.module.scss'

export const PressCenter: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Пресс-центр' />
			<News />
			<PhotoGallery />
			<VideoGallery />
		</main>
	)
}
