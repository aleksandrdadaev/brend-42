export interface ICover {
	_id: string
	photosPath: string[]
}

export interface ICoverForm {
	photos: FileList
}

export interface ICoverResponse {
	data: ICover
	statusCode: number
}
