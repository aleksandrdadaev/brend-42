'use client'

import { useMutation } from '@tanstack/react-query'

import { CommissionService } from '@/shared/api/services/commission.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IFileForm } from '@/shared/model/types/form.type'

export const useEditCommission = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IFileForm) => {
			const formData = new FormData()
			formData.append('file', data.file[0])
			return CommissionService.edit(formData)
		},
		onSuccess: () => notificationSuccess('Комиссия успешно изменена.'),
		onError: () => {
			notificationError(
				'При изменении комиссии произошла ошибка, попробуйте снова.'
			)
		},
	})

	return {
		mutate,
		isPending,
	}
}
