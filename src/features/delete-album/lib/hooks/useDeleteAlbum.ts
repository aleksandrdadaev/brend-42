'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAlbum = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => AlbumService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all albums'],
			})
			notificationSuccess('Альбом успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении альбома произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
