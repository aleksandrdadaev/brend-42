'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IOrganizerForm } from '@/shared/model/types/organizer.type'

export const useCreateOrganizer = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IOrganizerForm) => {
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('logo', data.logo[0])
			return CompetitionService.createOrganizer(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all organizers'] })
			notificationSuccess('Успешно добавлен новый организатор конкурса.')
		},
		onError: () =>
			notificationError(
				'При добавление организатора произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
