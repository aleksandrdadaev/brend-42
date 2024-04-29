import { AxiosResponse } from 'axios'

import { getDisposalUrl, multipart } from '@/shared/config/api.config'

import { $api } from '../instance-axios.api'

export const DisposalService = {
	async edit(data: FormData): Promise<AxiosResponse<any>> {
		return $api.put<any>(getDisposalUrl('/edit'), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
}
