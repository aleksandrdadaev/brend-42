'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IVideoForm } from '@/shared/model/types/video.type'

export const useEditVideo = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IVideoForm; id: string }) =>
			VideoService.edit(request.data, request.id),
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get video by id', response.data.data._id],
			})
			notificationSuccess('Видео успешно изменено.')
		},
		onError: () => {
			notificationError(
				'При изменении видео произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
