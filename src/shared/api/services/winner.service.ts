import { AxiosResponse } from 'axios'

import { getWinnerUrl, multipart } from '@/shared/config/api.config'
import {
	IWinnerResponse,
	IWinnersResponse,
} from '@/shared/model/types/winner.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const WinnerService = {
	async getAll(): Promise<AxiosResponse<IWinnersResponse>> {
		return axiosClassic.get<IWinnersResponse>(getWinnerUrl('/getAll'))
	},
	async getById(id: string): Promise<AxiosResponse<IWinnerResponse>> {
		return axiosClassic.get<IWinnerResponse>(getWinnerUrl(`/get/${id}`))
	},
	async create(data: FormData): Promise<AxiosResponse<IWinnerResponse>> {
		return $api.post<IWinnerResponse>(getWinnerUrl(`/create`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async edit(
		data: FormData,
		id: string
	): Promise<AxiosResponse<IWinnerResponse>> {
		return $api.put<IWinnerResponse>(getWinnerUrl(`/edit/${id}`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getWinnerUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getWinnerUrl(`/deleteAll`))
	},
}
