'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IWinnerForm } from '@/shared/model/types/winner.type'

export const useCreateWinner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IWinnerForm) => {
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('file', data.file[0])
			formData.append('preview', data.preview[0])
			return WinnerService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all winners'] })
			notificationSuccess('Успешно добавлен новый каталог победителей.')
		},
		onError: error => {
			if (error.response?.status === 400)
				notificationError('Каталог с таким названием уже существует!')
			else
				notificationError(
					'При добавление каталога победителей произошла ошибка, попробуйте снова.'
				)
		},
	})
	return {
		mutate,
		isPending,
	}
}
