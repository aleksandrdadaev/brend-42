'use client'

import { useMutation } from '@tanstack/react-query'

import { DisposalService } from '@/shared/api/services/disposal.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IFileForm } from '@/shared/model/types/form.type'

export const useEditDisposal = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IFileForm) => {
			const formData = new FormData()
			formData.append('file', data.file[0])
			return DisposalService.edit(formData)
		},
		onSuccess: () => notificationSuccess('Распоряжение успешно изменено.'),
		onError: error => {
			notificationError(
				'При изменении распоряжения произошла ошибка, попробуйте снова.'
			)
		},
	})

	return {
		mutate,
		isPending,
	}
}
