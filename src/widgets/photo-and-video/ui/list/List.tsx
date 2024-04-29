'use client'

import { FC } from 'react'

import { Album } from '@/entities/album'
import { Video } from '@/entities/video'

import { useResize } from '@/shared/lib/hooks/useResize'

import {
	transformTypeElementToPhoto,
	transformTypeElementToVideo,
} from '../../lib/utils/transform-types.util'
import { IPhotoAndVideo } from '../../model/types/photo-and-video.type'

import styles from './List.module.scss'

const List: FC<{ list: IPhotoAndVideo[] }> = ({ list }) => {
	const { isMobile, isDesktop, isLaptop, isTablet } = useResize()
	return (
		<div className={styles.list}>
			{list?.map((element, index, array) =>
				element.type === 'photo' ? (
					<>
						<div className={styles.photo} key={element._id}>
							<Album album={transformTypeElementToPhoto(element)} />
						</div>
						{isDesktop &&
							array[index + 1]?.type === 'video' &&
							array[index - 2]?.type !== 'photo' && (
								<div className={styles.video} />
							)}
						{(isTablet || isLaptop) &&
							array[index + 1]?.type === 'video' &&
							array[index - 3]?.type !== 'photo' && (
								<div className={styles.video} />
							)}
					</>
				) : (
					<>
						<div className={styles.video} key={element._id}>
							<Video video={transformTypeElementToVideo(element)} />
						</div>
						{!isMobile &&
							array[index + 1]?.type === 'photo' &&
							array[index - 1]?.type !== 'video' && (
								<div className={styles.video} />
							)}
					</>
				)
			)}
		</div>
	)
}

export default List
