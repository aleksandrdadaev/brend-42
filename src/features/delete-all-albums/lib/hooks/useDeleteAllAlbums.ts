'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllAlbums = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => AlbumService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all albums'],
			})
			notificationSuccess('Все альбомы успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении альбомов произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
