'use client'

import { useMutation } from '@tanstack/react-query'

import { ClauseService } from '@/shared/api/services/clause.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IFileForm } from '@/shared/model/types/form.type'

export const useEditClause = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IFileForm) => {
			const formData = new FormData()
			formData.append('file', data.file[0])
			return ClauseService.edit(formData)
		},
		onSuccess: () => notificationSuccess('Положение успешно изменено.'),
		onError: () => {
			notificationError(
				'При изменении положения произошла ошибка, попробуйте снова.'
			)
		},
	})

	return {
		mutate,
		isPending,
	}
}
