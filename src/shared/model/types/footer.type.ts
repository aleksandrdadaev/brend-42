export interface IFooter {
	_id: string
	photoPath: string
}

export interface IFooterForm {
	photo: FileList
}

export interface IFooterResponse {
	data: IFooter
	statusCode: number
}
