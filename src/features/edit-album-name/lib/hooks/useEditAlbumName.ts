'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IAlbumNameForm } from '@/shared/model/types/album.type'

export const useEditAlbumName = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IAlbumNameForm; id: string }) =>
			AlbumService.editName(request.data, request.id),
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get album by id', response.data.data._id],
			})
			notificationSuccess('Имя альбома успешно изменено.')
		},
		onError: () => {
			notificationError(
				'При изменении имени альбома произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
