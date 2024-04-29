'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IWinnerForm } from '@/shared/model/types/winner.type'

export const useEditWinner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IWinnerForm; id: string }) => {
			const formData = new FormData()
			formData.append('name', request.data.name)
			if (request.data.file.length)
				formData.append('file', request.data.file[0])
			if (request.data.preview.length)
				formData.append('preview', request.data.preview[0])
			return WinnerService.edit(formData, request.id)
		},

		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get winner by id', response.data.data._id],
			})
			notificationSuccess('Каталог победителей успешно изменен.')
		},
		onError: error => {
			if (error.response?.status === 400)
				notificationError('Каталог с таким названием уже существует!')
			else
				notificationError(
					'При изменении каталога победителей произошла ошибка, попробуйте снова.'
				)
		},
	})
	return {
		mutate,
		isPending,
	}
}
