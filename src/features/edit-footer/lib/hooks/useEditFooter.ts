'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { FooterService } from '@/shared/api/services/footer.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IFooterForm } from '@/shared/model/types/footer.type'

export const useEditFooter = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IFooterForm) => {
			const formData = new FormData()
			if (data.photo.length) formData.append('photo', data.photo[0])
			return FooterService.edit(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get footer'] })
			notificationSuccess('Фото в подвале успешно изменено.')
		},
		onError: () =>
			notificationError(
				'При изменении фото произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
