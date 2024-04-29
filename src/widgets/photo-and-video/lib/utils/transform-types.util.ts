import { IAlbum } from '@/shared/model/types/album.type'
import { IVideo } from '@/shared/model/types/video.type'

import { IPhotoAndVideo } from '../../model/types/photo-and-video.type'

export const transformTypePhotoToElement = (
	element: IAlbum
): IPhotoAndVideo => {
	return {
		_id: element._id,
		caption: element.name,
		url: element.photosPath,
		type: 'photo',
	}
}

export const transformTypeElementToPhoto = (
	element: IPhotoAndVideo
): IAlbum => {
	return {
		_id: element._id,
		name: element.caption,
		photosPath: element.url,
	}
}

export const transformTypeVideoToElement = (
	element: IVideo
): IPhotoAndVideo => {
	return {
		_id: element._id,
		caption: element.videoCaption,
		url: [element.videoLink],
		type: 'video',
	}
}

export const transformTypeElementToVideo = (
	element: IPhotoAndVideo
): IVideo => {
	return {
		_id: element._id,
		videoCaption: element.caption,
		videoLink: element.url[0],
	}
}
