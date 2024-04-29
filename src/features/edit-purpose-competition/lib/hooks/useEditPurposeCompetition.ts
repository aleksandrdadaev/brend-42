'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IPurpose } from '@/shared/model/types/purpose.type'

export const useEditPurposeCompetition = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IPurpose) => CompetitionService.editPurpose(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get purpose competition'] })
			notificationSuccess('Цель конкурса успешно изменена.')
		},
		onError: () =>
			notificationError(
				'При изменении цели конкурса произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
