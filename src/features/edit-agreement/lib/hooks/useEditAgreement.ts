'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AgreementService } from '@/shared/api/services/agreement.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { ITextForm } from '@/shared/model/types/form.type'

export const useEditAgreement = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: ITextForm) => AgreementService.edit(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get agreement'] })
			notificationSuccess('Пользовательское соглашение успешно изменено.')
		},
		onError: () =>
			notificationError(
				'При изменении соглашения произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
