import { AxiosResponse } from 'axios'

import { getFooterUrl, multipart } from '@/shared/config/api.config'
import { IFooterResponse } from '@/shared/model/types/footer.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const FooterService = {
	async get(): Promise<AxiosResponse<IFooterResponse>> {
		return axiosClassic.get<IFooterResponse>(getFooterUrl('/get'))
	},
	// async create(data: FormData): Promise<AxiosResponse<IFooterResponse>> {
	// 	return $api.post<IFooterResponse>(getFooterUrl(`/create`), data, {
	// 		headers: {
	// 			'Content-Type': multipart,
	// 		},
	// 	})
	// },
	async edit(data: FormData): Promise<AxiosResponse<IFooterResponse>> {
		return $api.put<IFooterResponse>(getFooterUrl(`/edit`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
}
