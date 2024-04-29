'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllVideos = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => VideoService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all videos'],
			})
			notificationSuccess('Все видео успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении видео произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
