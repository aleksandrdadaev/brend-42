export interface INews {
	_id: string
	name: string
	slug: string
	photoPath: string
	photoCaption: string
	newsText: string
	newsDate: string
}

export interface INewsForm extends Omit<INews, '_id' | 'photoPath'> {
	image: FileList
}

export interface INewsAllResponse {
	data: {
		news: INews[]
		totalNews: number
	}
	statusCode: number
}

export interface INewsResponse {
	data: INews
	statusCode: number
}
