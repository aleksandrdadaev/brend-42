export interface IParticipant {
	_id: string
	nameOfBrand: string
	nameOfCompany: string
	address: string
	district: string
	description: string
	logoPath: string
}

export interface IParticipantForm
	extends Omit<IParticipant, '_id' | 'logoPath'> {
	logo: FileList
}

export interface IParticipantsAllResponse {
	data: {
		participants: IParticipant[]
		totalParticipants: number
	}
	statusCode: number
}

export interface IParticipantsByResponse {
	data: IParticipant[]
	statusCode: number
}

export interface IParticipantResponse {
	data: IParticipant
	statusCode: number
}
