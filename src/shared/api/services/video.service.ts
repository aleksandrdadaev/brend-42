import { AxiosResponse } from 'axios'

import {
	getPartnerUrl,
	getVideoUrl,
	multipart,
} from '@/shared/config/api.config'
import {
	createPageNumber,
	createPageSize,
} from '@/shared/lib/utils/create-query-param.util'
import {
	IPartnerResponse,
	IPartnersResponse,
} from '@/shared/model/types/partner.type'
import {
	IVideoForm,
	IVideoResponse,
	IVideosResponse,
} from '@/shared/model/types/video.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const VideoService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number
	): Promise<AxiosResponse<IVideosResponse>> {
		return axiosClassic.get<IVideosResponse>(
			getVideoUrl(
				`/getAll?${createPageSize(pageSize)}${createPageNumber(pageNumber)}`
			)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IVideoResponse>> {
		return axiosClassic.get<IVideoResponse>(getVideoUrl(`/get/${id}`))
	},
	async create(data: IVideoForm): Promise<AxiosResponse<IVideoResponse>> {
		return $api.post<IVideoResponse>(getVideoUrl(`/add`), data)
	},
	async edit(
		data: IVideoForm,
		id: string
	): Promise<AxiosResponse<IVideoResponse>> {
		return $api.put<IVideoResponse>(getVideoUrl(`/edit/${id}`), data)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getVideoUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getVideoUrl(`/deleteAll`))
	},
}
