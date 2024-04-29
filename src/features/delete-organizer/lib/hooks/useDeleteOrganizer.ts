'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteOrganizer = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => CompetitionService.deleteOrganizer(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all organizers'],
			})
			notificationSuccess('Организатор конкурса успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении организатора произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
