import { AxiosResponse } from 'axios'

import { getCommissionUrl, multipart } from '@/shared/config/api.config'

import { $api } from '../instance-axios.api'

export const CommissionService = {
	async edit(data: FormData): Promise<AxiosResponse<any>> {
		return $api.put<any>(getCommissionUrl('/edit'), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
}
