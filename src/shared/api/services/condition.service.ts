import { AxiosResponse } from 'axios'

import { getCompetitionUrl } from '@/shared/config/api.config'
import {
	IConditionForm,
	IConditionResponse,
} from '@/shared/model/types/condition.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const ConditionService = {
	async get(): Promise<AxiosResponse<IConditionResponse>> {
		return axiosClassic.get<IConditionResponse>(
			getCompetitionUrl('/getCondition')
		)
	},
	async edit(data: IConditionForm): Promise<AxiosResponse<IConditionResponse>> {
		return $api.put<IConditionResponse>(
			getCompetitionUrl('/editCondition'),
			data
		)
	},
}
