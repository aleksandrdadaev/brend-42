'use client'

import { FC, useContext, useState } from 'react'

import { useGetAllVideos } from '@/features/get-all-videos'
import { usePagination } from '@/features/pagination'
import { ShowMoreButton } from '@/features/show-more-button'

import { LoaderVideo, Video } from '@/entities/video'

import { changePageSize } from '@/shared/lib/utils/change-page-size.util'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IVideo } from '@/shared/model/types/video.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './VideoGallery.module.scss'

export const VideoGallery: FC = () => {
	const manage = useContext(ManageContext)
	const [pageSize, setPageSize] = useState<number>(6)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const { isLoading, isSuccess, totalVideos, videos } = useGetAllVideos(
		!manage ? pageSize : undefined,
		!manage ? pageNumber : undefined
	)

	const { list, showMore } = usePagination<IVideo>({
		isSuccess,
		pageNumber,
		pageSize,
		elements: videos,
		totalElements: totalVideos,
	})
	const loadings = new Array(pageSize).fill('')
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={!manage}>Видеогалерея</SubTitle>
			<div className={styles.right}>
				<div className={styles.list}>
					{isLoading &&
						!list.length &&
						loadings.map((el, index) => <LoaderVideo key={index} />)}
					{!manage &&
						list.length > 0 &&
						list.map(video => <Video video={video} key={video._id} />)}
					{manage &&
						isSuccess &&
						videos?.map(video => <Video video={video} key={video._id} />)}
				</div>
				{!manage && showMore && (
					<ShowMoreButton
						text='Показать больше'
						clickHandler={() => setPageNumber(prev => prev + 1)}
						isLoading={isLoading}
					/>
				)}
			</div>
		</section>
	)
}
