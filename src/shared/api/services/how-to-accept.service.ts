import { AxiosResponse } from 'axios'

import { getCompetitionUrl } from '@/shared/config/api.config'
import {
	IHowToAcceptForm,
	IHowToAcceptResponse,
	IHowToAcceptsResponse,
} from '@/shared/model/types/how-to-accept.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const HowToAcceptService = {
	async getAll(): Promise<AxiosResponse<IHowToAcceptsResponse>> {
		return axiosClassic.get<IHowToAcceptsResponse>(
			getCompetitionUrl(`/getAllHowParticipates`)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IHowToAcceptResponse>> {
		return axiosClassic.get<IHowToAcceptResponse>(
			getCompetitionUrl(`/getHowParticipate/${id}`)
		)
	},
	async create(
		data: IHowToAcceptForm
	): Promise<AxiosResponse<IHowToAcceptResponse>> {
		return $api.post<IHowToAcceptResponse>(
			getCompetitionUrl(`/createHowParticipate`),
			data
		)
	},
	async edit(
		data: IHowToAcceptForm,
		id: string
	): Promise<AxiosResponse<IHowToAcceptResponse>> {
		return $api.put<IHowToAcceptResponse>(
			getCompetitionUrl(`/editHowParticipate/${id}`),
			data
		)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteHowParticipate/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteAllHowParticipates`))
	},
}
