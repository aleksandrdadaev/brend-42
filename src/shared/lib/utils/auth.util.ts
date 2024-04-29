'use client'

import { authActions } from '@/shared/model/store/slices/auth.slice'
import { AppDispatch } from '@/shared/model/store/store'
import { IAuthResponse } from '@/shared/model/types/auth.type'

import { removeToken, setToken } from './cookie.util'

export const setAuth = (data: IAuthResponse, dispatch: AppDispatch) => {
	dispatch(authActions.login())
	setToken(data.data)
}

export const clearAuth = (dispatch: AppDispatch) => {
	dispatch(authActions.logout())
	removeToken()
}
