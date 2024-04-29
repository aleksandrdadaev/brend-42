'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { transformStringDateToIso } from '@/shared/lib/utils/transform-date.util'
import { INewsForm } from '@/shared/model/types/news.type'

export const useCreateNews = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: INewsForm) => {
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('slug', data.slug)
			formData.append('newsText', data.newsText)
			formData.append('newsDate', transformStringDateToIso(data.newsDate))
			formData.append('photoCaption', data.photoCaption)
			formData.append('image', data.image[0])
			return NewsService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all news'] })
			notificationSuccess('Успешно добавлена новая новость.')
		},
		onError: error => {
			if (error.response?.status === 400)
				notificationError(
					'Новость с таким названием или ссылкой уже существует!'
				)
			else
				notificationError(
					'При добавление новости произошла ошибка, попробуйте снова.'
				)
		},
	})
	return {
		mutate,
		isPending,
	}
}
