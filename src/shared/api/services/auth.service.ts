import { AxiosResponse } from 'axios'

import { getAuthUrl } from '@/shared/config/api.config'
import { IAuthResponse } from '@/shared/model/types/auth.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const AuthService = {
	async signIn(
		username: string,
		password: string
	): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>(getAuthUrl('/signin'), {
			username,
			password,
		})
	},

	async refresh(): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>(
			getAuthUrl('/refresh'),
			{},
			{ withCredentials: true }
		)
	},

	async logout(): Promise<void> {
		return $api.post(getAuthUrl('/logout'))
	},
}
