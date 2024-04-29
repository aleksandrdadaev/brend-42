'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllNews = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => NewsService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all news'],
			})
			notificationSuccess('Все новости успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении новостей произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
