import { AxiosResponse } from 'axios'

import { getDistrictUrl } from '@/shared/config/api.config'
import {
	IDistrictResponse,
	IDistrictsResponse,
} from '@/shared/model/types/district.type'

import { axiosClassic } from '../instance-axios.api'

export const DistrictService = {
	async getAll(): Promise<AxiosResponse<IDistrictsResponse>> {
		return axiosClassic.get<IDistrictsResponse>(
			getDistrictUrl(`/getAllDistrict`)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IDistrictResponse>> {
		return axiosClassic.get<IDistrictResponse>(getDistrictUrl(`/get/${id}`))
	},
}
