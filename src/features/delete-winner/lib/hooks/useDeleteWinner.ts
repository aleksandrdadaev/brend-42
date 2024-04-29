'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteWinner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => WinnerService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all winners'],
			})
			notificationSuccess('Каталог победителей успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении каталог победителей произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
