import { AxiosResponse } from 'axios'

import { getPartnerUrl, multipart } from '@/shared/config/api.config'
import {
	createPageNumber,
	createPageSize,
} from '@/shared/lib/utils/create-query-param.util'
import {
	IPartnerResponse,
	IPartnersResponse,
} from '@/shared/model/types/partner.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const PartnerService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number
	): Promise<AxiosResponse<IPartnersResponse>> {
		return axiosClassic.get<IPartnersResponse>(
			getPartnerUrl(
				`/getAll?${createPageSize(pageSize)}${createPageNumber(pageNumber)}`
			)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IPartnerResponse>> {
		return axiosClassic.get<IPartnerResponse>(getPartnerUrl(`/get/${id}`))
	},
	async create(data: FormData): Promise<AxiosResponse<IPartnerResponse>> {
		return $api.post<IPartnerResponse>(getPartnerUrl(`/create`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async edit(
		data: FormData,
		id: string
	): Promise<AxiosResponse<IPartnerResponse>> {
		return $api.put<IPartnerResponse>(getPartnerUrl(`/edit/${id}`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getPartnerUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getPartnerUrl(`/deleteAll`))
	},
}
