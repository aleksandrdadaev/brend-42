'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeletePhotosFromAlbum = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { id: string; index: number }) =>
			AlbumService.deletePhoto(request.id, request.index),
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get album by id', response.data.data._id],
			})
			notificationSuccess('Успешно удалено фото из альбома.')
		},
		onError: () => {
			notificationError(
				'При удалении фото из альбома произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
