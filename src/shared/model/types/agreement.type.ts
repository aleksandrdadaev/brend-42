export interface IAgreement {
	_id: string
	text: string
}

export interface IAgreementResponse {
	data: IAgreement
	statusCode: number
}
