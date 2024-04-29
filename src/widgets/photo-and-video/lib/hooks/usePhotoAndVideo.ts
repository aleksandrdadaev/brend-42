import { useEffect, useState } from 'react'

import { IPhotoAndVideoProps } from '../../model/types/photo-and-video-props.type'
import { IPhotoAndVideo } from '../../model/types/photo-and-video.type'
import {
	transformTypePhotoToElement,
	transformTypeVideoToElement,
} from '../utils/transform-types.util'

export const usePhotoAndVideo = ({
	albums,
	successAlbums,
	successVideos,
	videos,
	totalAlbums,
	totalVideos,
	pageNumber,
	pageSize,
	pageSize2,
}: IPhotoAndVideoProps) => {
	const [showMore, setShowMore] = useState<boolean>(true)
	const [list, setList] = useState<IPhotoAndVideo[]>([])

	useEffect(() => {
		if (successAlbums && successVideos) {
			let arrayPhotos = albums?.map(album => transformTypePhotoToElement(album))
			let arrayVideos = videos?.map(video => transformTypeVideoToElement(video))
			let concatArray = arrayPhotos?.concat(arrayVideos || [])
			pageNumber === 1
				? setList(concatArray || [])
				: setList(prev => prev.concat(concatArray || []))
			if (
				(totalAlbums || 0) <= pageNumber * pageSize &&
				(totalVideos || 0) <= pageNumber * pageSize2
			) {
				setShowMore(false)
			} else setShowMore(true)
		}
	}, [successAlbums, successVideos, pageSize, pageSize2, pageNumber])

	return {
		list,
		showMore,
	}
}
