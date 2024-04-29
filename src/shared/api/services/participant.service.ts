import { AxiosResponse } from 'axios'

import { getParticipantUrl, multipart } from '@/shared/config/api.config'
import {
	createDistrict,
	createId,
	createNameOfCompany,
	createPageNumber,
	createPageSize,
	createSort,
} from '@/shared/lib/utils/create-query-param.util'
import {
	IParticipantResponse,
	IParticipantsAllResponse,
	IParticipantsByResponse,
} from '@/shared/model/types/participant.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const ParticipantService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number,
		sort?: boolean
	): Promise<AxiosResponse<IParticipantsAllResponse>> {
		return axiosClassic.get<IParticipantsAllResponse>(
			getParticipantUrl(
				`/getAllParticipants?${createPageSize(pageSize)}${createPageNumber(
					pageNumber
				)}${createSort(sort)}`
			)
		)
	},
	async getBy(
		id?: string,
		name?: string,
		district?: string[]
	): Promise<AxiosResponse<IParticipantsByResponse>> {
		return axiosClassic.get<IParticipantsByResponse>(
			getParticipantUrl(
				`/getParticipantBy?${createId(id)}${createNameOfCompany(
					name
				)}${createDistrict(district)}`
			)
		)
	},
	async getByDistrict(
		id: string
	): Promise<AxiosResponse<IParticipantsAllResponse>> {
		return axiosClassic.get<IParticipantsAllResponse>(
			getParticipantUrl(`/getAllByDistrict/${id}`)
		)
	},
	async create(data: FormData): Promise<AxiosResponse<IParticipantResponse>> {
		return $api.post<IParticipantResponse>(getParticipantUrl(`/create`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async edit(
		data: FormData,
		id: string
	): Promise<AxiosResponse<IParticipantResponse>> {
		return $api.put<IParticipantResponse>(
			getParticipantUrl(`/edit/${id}`),
			data,
			{
				headers: {
					'Content-Type': multipart,
				},
			}
		)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getParticipantUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getParticipantUrl(`/deleteAll`))
	},
}
