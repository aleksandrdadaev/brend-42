'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteHowParticipate = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => HowToAcceptService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all how participates'],
			})
			notificationSuccess('Этап принятия участия успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении этапа произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
