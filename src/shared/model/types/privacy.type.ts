export interface IPrivacy {
	_id: string
	text: string
}

export interface IPrivacyResponse {
	data: IPrivacy
	statusCode: number
}
