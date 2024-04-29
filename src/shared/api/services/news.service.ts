import { AxiosResponse } from 'axios'

import { getNewsUrl, multipart } from '@/shared/config/api.config'
import {
	createId,
	createPageNumber,
	createPageSize,
	createSlug,
} from '@/shared/lib/utils/create-query-param.util'
import { INewsAllResponse, INewsResponse } from '@/shared/model/types/news.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const NewsService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number
	): Promise<AxiosResponse<INewsAllResponse>> {
		return axiosClassic.get<INewsAllResponse>(
			getNewsUrl(
				`/getAll?${createPageSize(pageSize)}${createPageNumber(pageNumber)}`
			)
		)
	},
	async getBy(
		id?: string,
		slug?: string
	): Promise<AxiosResponse<INewsResponse>> {
		return axiosClassic.get<INewsResponse>(
			getNewsUrl(`/getBy?${createId(id)}${createSlug(slug)}`)
		)
	},
	async create(data: FormData): Promise<AxiosResponse<INewsResponse>> {
		return $api.post<INewsResponse>(getNewsUrl(`/create`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async edit(
		data: FormData,
		id: string
	): Promise<AxiosResponse<INewsResponse>> {
		return $api.put<INewsResponse>(getNewsUrl(`/edit/${id}`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getNewsUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getNewsUrl(`/deleteAll`))
	},
}
