'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IAlbumPhotosForm } from '@/shared/model/types/album.type'

export const useAddPhotosToAlbum = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IAlbumPhotosForm; id: string }) => {
			const formData = new FormData()
			Array.from(request.data.photos).map(file =>
				formData.append('photos', file)
			)
			return AlbumService.addPhotos(formData, request.id)
		},
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get album by id', response.data.data._id],
			})
			notificationSuccess('Успешно добавлены новые фото в альбом.')
		},
		onError: () => {
			notificationError(
				'При добавлении фото в альбом произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
