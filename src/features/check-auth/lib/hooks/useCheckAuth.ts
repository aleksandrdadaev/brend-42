'use client'

import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

import { AuthService } from '@/shared/api/services/auth.service'
import { clearAuth, setAuth } from '@/shared/lib/utils/auth.util'
import { useAppDispatch } from '@/shared/model/store/store-hooks'

export const useCheckAuth = () => {
	const dispatch = useAppDispatch()
	const { data, mutate, isSuccess, isError, isPending, isIdle, status } =
		useMutation({
			mutationFn: (props: any) => AuthService.refresh(),
			onSuccess: data => setAuth(data.data, dispatch),
			onError: () => clearAuth(dispatch),
		})

	return {
		mutate,
	}
}
