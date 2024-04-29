import { AxiosResponse } from 'axios'

import { getAgreementUrl } from '@/shared/config/api.config'
import { IAgreementResponse } from '@/shared/model/types/agreement.type'
import { ITextForm } from '@/shared/model/types/form.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const AgreementService = {
	async get(): Promise<AxiosResponse<IAgreementResponse>> {
		return axiosClassic.get<IAgreementResponse>(getAgreementUrl('/get'))
	},
	async edit(data: ITextForm): Promise<AxiosResponse<IAgreementResponse>> {
		return $api.put<IAgreementResponse>(getAgreementUrl('/edit'), data)
	},
}
