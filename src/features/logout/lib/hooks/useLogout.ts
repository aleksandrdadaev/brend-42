'use client'

import { useMutation } from '@tanstack/react-query'

import { AuthService } from '@/shared/api/services/auth.service'
import { clearAuth } from '@/shared/lib/utils/auth.util'
import { useAppDispatch } from '@/shared/model/store/store-hooks'

export const useLogout = () => {
	const dispatch = useAppDispatch()
	const { mutate, isError, isSuccess, isPending, error } = useMutation({
		mutationFn: () => AuthService.logout(),
		onSuccess: () => clearAuth(dispatch),
	})

	if (isError) console.log(error.response?.data.message)

	return {
		mutate,
		isPending,
	}
}
