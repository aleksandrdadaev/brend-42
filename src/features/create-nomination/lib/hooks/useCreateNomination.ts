'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { INominationForm } from '@/shared/model/types/nomination.type'

export const useCreateNomination = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: INominationForm) => {
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('description', data.description)
			if (data.file?.length) formData.append('file', data.file[0])
			return NominationService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all nominations'] })
			notificationSuccess('Успешно добавлена новая номинация.')
		},
		onError: () =>
			notificationError(
				'При добавление номинации произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
