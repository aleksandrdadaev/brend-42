'use client'

import { useMutation } from '@tanstack/react-query'

import { AuthService } from '@/shared/api/services/auth.service'
import { setAuth } from '@/shared/lib/utils/auth.util'
import { useAppDispatch } from '@/shared/model/store/store-hooks'
import { ISignInForm } from '@/shared/model/types/auth.type'

export const useLogin = () => {
	const dispatch = useAppDispatch()
	const { data, isSuccess, isPending, mutate, isError, error } = useMutation({
		mutationFn: (request: ISignInForm) =>
			AuthService.signIn(request.username, request.password),
		onSuccess: data => setAuth(data.data, dispatch),
	})

	if (isError) {
		if (error.response?.status === 401) console.log('Не правильно')
		else console.log('Ошибка сервера')
	}

	return {
		data,
		mutate,
		isLoading: isPending,
	}
}
