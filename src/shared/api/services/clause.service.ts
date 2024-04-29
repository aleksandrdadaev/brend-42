import { AxiosResponse } from 'axios'

import { getClauseUrl, multipart } from '@/shared/config/api.config'

import { $api } from '../instance-axios.api'

export const ClauseService = {
	async edit(data: FormData): Promise<AxiosResponse<any>> {
		return $api.put<any>(getClauseUrl('/edit'), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
}
