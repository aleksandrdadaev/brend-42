import { AxiosResponse } from 'axios'

import { getCoverUrl, multipart } from '@/shared/config/api.config'
import { ICoverResponse } from '@/shared/model/types/cover.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const CoverService = {
	async get(): Promise<AxiosResponse<ICoverResponse>> {
		return axiosClassic.get<ICoverResponse>(getCoverUrl('/get'))
	},
	async deletePhoto(index: number): Promise<AxiosResponse<ICoverResponse>> {
		return $api.delete<ICoverResponse>(getCoverUrl(`/deletePhoto/${index}`))
	},
	async addPhotos(data: FormData): Promise<AxiosResponse<ICoverResponse>> {
		return $api.post<ICoverResponse>(getCoverUrl(`/addPhotos`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
}
