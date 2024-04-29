export interface IPartner {
	_id: string
	nameOfCompany: string
	description: string
	logoPath: string
}

export interface IPartnerForm extends Omit<IPartner, '_id' | 'logoPath'> {
	logo: FileList
}

export interface IPartnersResponse {
	data: {
		partners: IPartner[]
		totalPartners: number
	}
	statusCode: number
}

export interface IPartnerResponse {
	data: IPartner
	statusCode: number
}
