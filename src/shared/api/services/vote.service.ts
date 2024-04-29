import { AxiosResponse } from 'axios'

import { getVoteUrl } from '@/shared/config/api.config'
import { IVote, IVoteResponse } from '@/shared/model/types/vote.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const VoteService = {
	async get(): Promise<AxiosResponse<IVoteResponse>> {
		return axiosClassic.get<IVoteResponse>(getVoteUrl('/get'))
	},
	async edit(data: IVote): Promise<AxiosResponse<IVoteResponse>> {
		return $api.put<IVoteResponse>(getVoteUrl('/edit'), data)
	},
}
