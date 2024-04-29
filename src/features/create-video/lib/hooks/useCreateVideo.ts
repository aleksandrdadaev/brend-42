'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IVideoForm } from '@/shared/model/types/video.type'

export const useCreateVideo = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IVideoForm) => VideoService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all videos'] })
			notificationSuccess('Успешно добавлено новое видео.')
		},
		onError: () => {
			notificationError(
				'При добавление видео произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
