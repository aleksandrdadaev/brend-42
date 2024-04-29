'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PrivacyService } from '@/shared/api/services/privacy.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { ITextForm } from '@/shared/model/types/form.type'

export const useEditPrivacy = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: ITextForm) => PrivacyService.edit(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get policy'] })
			notificationSuccess('Политика успешно изменена.')
		},
		onError: () =>
			notificationError(
				'При изменении политики произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
