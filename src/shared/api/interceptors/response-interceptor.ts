'use client'

import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { error } from 'console'

import { getAuthUrl } from '@/shared/config/api.config'
import { removeToken, setToken } from '@/shared/lib/utils/cookie.util'
import { authActions } from '@/shared/model/store/slices/auth.slice'
import { IAuthResponse } from '@/shared/model/types/auth.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const setResponseInterceptor = (
	dispatch: ThunkDispatch<
		{
			auth: {
				isAuth: boolean
			}
		},
		undefined,
		UnknownAction
	> &
		Dispatch<UnknownAction>
) => {
	$api.interceptors.response.use(
		config => config,
		async error => {
			const originalRequest = error.config
			if (
				error.response?.status === 401 &&
				error.config &&
				!error.config._isRetry
			) {
				originalRequest._isRetry = true
				try {
					const response = await axiosClassic.post<IAuthResponse>(
						getAuthUrl('/refresh'),
						{},
						{ withCredentials: true }
					)
					setToken(response.data.data)
					dispatch(authActions.login())
					return $api.request(originalRequest)
				} catch (e) {
					removeToken()
					dispatch(authActions.logout())
				}
			}
			throw error
		}
	)
}
