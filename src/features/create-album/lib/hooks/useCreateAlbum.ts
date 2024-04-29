'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IAlbumForm } from '@/shared/model/types/album.type'

export const useCreateAlbum = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IAlbumForm) => {
			const formData = new FormData()
			formData.append('name', data.name)
			Array.from(data.photos).map(file => formData.append('photos', file))
			return AlbumService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all albums'] })
			notificationSuccess('Успешно добавлен новый альбом.')
		},
		onError: () => {
			notificationError(
				'При добавление альбома произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
