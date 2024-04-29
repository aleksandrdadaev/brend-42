'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { INominationForm } from '@/shared/model/types/nomination.type'

export const useEditNomination = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: INominationForm; id: string }) => {
			const formData = new FormData()
			formData.append('name', request.data.name)
			formData.append('description', request.data.description)
			if (request.data.file?.length)
				formData.append('file', request.data.file[0])
			return NominationService.edit(formData, request.id)
		},
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get nomination by id', response.data.data._id],
			})
			notificationSuccess('Номинация успешно изменена.')
		},
		onError: () =>
			notificationError(
				'При изменении номинации произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
