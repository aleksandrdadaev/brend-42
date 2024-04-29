export interface IDistrict {
	_id: string
	name: string
	participants: string[]
}

export interface IDistrictsResponse {
	data: IDistrict[]
	statusCode: number
}

export interface IDistrictResponse {
	data: IDistrict
	statusCode: number
}
