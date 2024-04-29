import { AxiosResponse } from 'axios'

import { getCompetitionUrl, multipart } from '@/shared/config/api.config'
import {
	INominationResponse,
	INominationsResponse,
} from '@/shared/model/types/nomination.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const NominationService = {
	async getAll(): Promise<AxiosResponse<INominationsResponse>> {
		return axiosClassic.get<INominationsResponse>(
			getCompetitionUrl(`/getAllNominations`)
		)
	},
	async getById(id: string): Promise<AxiosResponse<INominationResponse>> {
		return axiosClassic.get<INominationResponse>(
			getCompetitionUrl(`/getNomination/${id}`)
		)
	},
	async create(data: FormData): Promise<AxiosResponse<INominationResponse>> {
		return $api.post<INominationResponse>(
			getCompetitionUrl(`/createNomination`),
			data,
			{
				headers: {
					'Content-Type': multipart,
				},
			}
		)
	},
	async edit(
		data: FormData,
		id: string
	): Promise<AxiosResponse<INominationResponse>> {
		return $api.put<INominationResponse>(
			getCompetitionUrl(`/editNomination/${id}`),
			data,
			{
				headers: {
					'Content-Type': multipart,
				},
			}
		)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteNomination/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteAllNominations`))
	},
}
