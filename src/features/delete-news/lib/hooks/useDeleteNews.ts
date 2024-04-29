'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteNews = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => NewsService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all news'],
			})
			notificationSuccess('Новость успешно удалена.')
		},
		onError: () =>
			notificationError(
				'При удалении новости произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
