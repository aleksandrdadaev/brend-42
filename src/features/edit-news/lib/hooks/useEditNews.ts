'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { transformStringDateToIso } from '@/shared/lib/utils/transform-date.util'
import { INewsForm } from '@/shared/model/types/news.type'

export const useEditNews = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: INewsForm; id: string }) => {
			const formData = new FormData()
			formData.append('name', request.data.name)
			formData.append('slug', request.data.slug)
			formData.append('newsText', request.data.newsText)
			formData.append(
				'newsDate',
				transformStringDateToIso(request.data.newsDate)
			)
			formData.append('photoCaption', request.data.photoCaption)
			if (request.data.image.length)
				formData.append('image', request.data.image[0])
			return NewsService.edit(formData, request.id)
		},

		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: [
					'get news by',
					response.data.data._id,
					response.data.data.slug,
				],
			})
			notificationSuccess('Новость успешно изменена.')
		},
		onError: error => {
			if (error.response?.status === 400)
				notificationError(
					'Новость с таким названием или ссылкой уже существует!'
				)
			else
				notificationError(
					'При изменении новости произошла ошибка, попробуйте снова.'
				)
		},
	})
	return {
		mutate,
		isPending,
	}
}
