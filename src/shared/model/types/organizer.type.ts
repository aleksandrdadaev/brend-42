export interface IOrganizer {
	_id: string
	name: string
	logoPath: string
}

export interface IOrganizerForm {
	name: string
	logo: FileList
}

export interface IOrganizersResponse {
	data: {
		organizers: IOrganizer[]
		totalOrganizers: number
	}
	statusCode: number
}

export interface IOrganizerResponse {
	data: IOrganizer
	statusCode: number
}
