import { IAlbum } from '@/shared/model/types/album.type'
import { IVideo } from '@/shared/model/types/video.type'

export interface IPhotoAndVideoProps {
	albums: IAlbum[] | undefined
	videos: IVideo[] | undefined
	successAlbums: boolean
	successVideos: boolean
	totalVideos: number | undefined
	totalAlbums: number | undefined
	pageSize: number
	pageSize2: number
	pageNumber: number
}
