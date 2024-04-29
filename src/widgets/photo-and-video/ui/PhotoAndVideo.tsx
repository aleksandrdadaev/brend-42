'use client'

import { FC, useState } from 'react'

import { useGetAllAlbums } from '@/features/get-all-albums'
import { useGetAllVideos } from '@/features/get-all-videos'
import { ShowMoreButton } from '@/features/show-more-button'

import { changePageSize } from '@/shared/lib/utils/change-page-size.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { usePhotoAndVideo } from '../lib/hooks/usePhotoAndVideo'

import styles from './PhotoAndVideo.module.scss'
import List from './list/List'
import LoadingList from './loading-list/LoadingList'

export const PhotoAndVideo: FC = () => {
	const [pageSize, setPageSize] = useState<number>(3)
	const [pageSize2, setPageSize2] = useState<number>(2)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const {
		albums,
		totalAlbums,
		isLoading: loadingPhotos,
		isSuccess: successAlbums,
	} = useGetAllAlbums(pageSize, pageNumber)
	const {
		videos,
		totalVideos,
		isLoading: loadingVideos,
		isSuccess: successVideos,
	} = useGetAllVideos(pageSize2, pageNumber)

	const { list, showMore } = usePhotoAndVideo({
		albums,
		videos,
		successAlbums,
		successVideos,
		totalAlbums,
		totalVideos,
		pageSize,
		pageSize2,
		pageNumber,
	})

	changePageSize({
		setPageNumber,
		setPageSize,
		desktop: 3,
		laptop: 4,
		tablet: 4,
		mobile: 2,
	})

	changePageSize({
		setPageNumber,
		setPageSize: setPageSize2,
		desktop: 2,
		laptop: 2,
		tablet: 2,
		mobile: 1,
	})

	return (
		<section className={styles.section}>
			<SubTitle classname='text-primary'>Фото и видео</SubTitle>
			<div className={styles.content}>
				{(loadingPhotos || loadingVideos) && !list.length && (
					<LoadingList size1={pageSize} size2={pageSize2} />
				)}
				{list.length > 0 && <List list={list} />}
				{showMore && (
					<ShowMoreButton
						clickHandler={() => setPageNumber(prev => prev + 1)}
						isLoading={loadingPhotos || loadingVideos}
						text='Смотреть больше'
					/>
				)}
			</div>
		</section>
	)
}
