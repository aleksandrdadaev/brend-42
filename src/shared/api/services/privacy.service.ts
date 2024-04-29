import { AxiosResponse } from 'axios'

import { getPrivacyUrl } from '@/shared/config/api.config'
import { ITextForm } from '@/shared/model/types/form.type'
import { IPrivacyResponse } from '@/shared/model/types/privacy.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const PrivacyService = {
	async get(): Promise<AxiosResponse<IPrivacyResponse>> {
		return axiosClassic.get<IPrivacyResponse>(getPrivacyUrl('/get'))
	},
	async edit(data: ITextForm): Promise<AxiosResponse<IPrivacyResponse>> {
		return $api.put<IPrivacyResponse>(getPrivacyUrl('/edit'), data)
	},
}
