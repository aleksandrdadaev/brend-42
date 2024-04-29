'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllWinners = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => WinnerService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all winners'],
			})
			notificationSuccess('Все каталоги победителей успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении каталогов победителей произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
