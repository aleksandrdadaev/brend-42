'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { CoverService } from '@/shared/api/services/cover.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { ICoverForm } from '@/shared/model/types/cover.type'

export const useAddCover = () => {
	const { mutate, isError, isSuccess, isPending } = useMutation({
		mutationFn: (data: ICoverForm) => {
			const formData = new FormData()
			Array.from(data.photos).map(file => formData.append('photos', file))
			return CoverService.addPhotos(formData)
		},
	})
	const queryClient = useQueryClient()

	useEffect(() => {
		if (isSuccess) {
			queryClient.invalidateQueries({ queryKey: ['get cover'] })
			notificationSuccess('Фото успешно добавлены в обложку.')
		}
	}, [isSuccess])

	if (isError)
		notificationError('При добавлении фото произошла ошибка, попробуйте снова.')

	return {
		mutate,
		isPending,
	}
}
