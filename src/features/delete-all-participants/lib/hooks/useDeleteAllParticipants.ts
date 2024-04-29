'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllParticipants = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => ParticipantService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all participants'],
			})
			queryClient.invalidateQueries({
				queryKey: ['get participants by'],
			})
			notificationSuccess('Все участники успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении участников произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
