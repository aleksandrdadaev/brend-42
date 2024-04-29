export interface INomination {
	_id: string
	name: string
	description: string
	filePath?: string
}

export interface INominationForm {
	name: string
	description: string
	file?: FileList
}

export interface INominationsResponse {
	data: {
		nominations: INomination[]
		totalNominations: number
	}
	statusCode: number
}

export interface INominationResponse {
	data: INomination
	statusCode: number
}
