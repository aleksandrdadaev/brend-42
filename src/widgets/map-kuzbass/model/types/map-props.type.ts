import { Dispatch, SetStateAction } from 'react'

import { IDistrict } from '@/shared/model/types/district.type'

export interface IMapProps {
	setDistrict: Dispatch<SetStateAction<string>>
	setDistrictId: Dispatch<SetStateAction<string>>
	districtName: string
	districts?: IDistrict[]
	isLoading: boolean
	isSuccess: boolean
}
