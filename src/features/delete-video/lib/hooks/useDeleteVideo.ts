'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteVideo = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => VideoService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all videos'],
			})
			notificationSuccess('Видео успешно удалено.')
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
