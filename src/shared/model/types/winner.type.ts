export interface IWinner {
	_id: string
	nameFile: string
	filePath: string
	previewPath: string
}

export interface IWinnerForm {
	name: string
	file: FileList
	preview: FileList
}

export interface IWinnersResponse {
	data: IWinner[]
	statusCode: number
}

export interface IWinnerResponse {
	data: IWinner
	statusCode: number
}
