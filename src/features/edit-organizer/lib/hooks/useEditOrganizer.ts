'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IOrganizerForm } from '@/shared/model/types/organizer.type'

export const useEditOrganizer = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IOrganizerForm; id: string }) => {
			const formData = new FormData()
			formData.append('name', request.data.name)
			formData.append('logo', request.data.logo[0])
			return CompetitionService.editOrganizer(formData, request.id)
		},
		onSuccess: data => {
			queryClient.invalidateQueries({
				queryKey: ['get organizer by id', data.data.data._id],
			})
			notificationSuccess('Организатор конкурса успешно изменен.')
		},
		onError: () =>
			notificationError(
				'При изменения организатора произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
