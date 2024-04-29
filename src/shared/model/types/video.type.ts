export interface IVideo {
	_id: string
	videoLink: string
	videoCaption: string
}

export interface IVideoForm extends Omit<IVideo, '_id'> {}

export interface IVideosResponse {
	data: {
		videos: IVideo[]
		totalVideos: number
	}
	statusCode: number
}

export interface IVideoResponse {
	data: IVideo
	statusCode: number
}
