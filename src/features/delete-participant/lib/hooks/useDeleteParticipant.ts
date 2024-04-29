'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteParticipant = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => ParticipantService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all participants'],
			})
			queryClient.invalidateQueries({
				queryKey: ['get participants by'],
			})
			notificationSuccess('Участник успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении участника произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
