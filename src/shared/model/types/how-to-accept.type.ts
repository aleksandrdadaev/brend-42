export interface IHowToAccept {
	_id: string
	text: string
}

export interface IHowToAcceptForm extends Omit<IHowToAccept, '_id'> {}

export interface IHowToAcceptsResponse {
	data: {
		howParticipates: IHowToAccept[]
		totalHowParticipates: number
	}
	statusCode: number
}

export interface IHowToAcceptResponse {
	data: IHowToAccept
	statusCode: number
}
