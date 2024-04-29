'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { CoverService } from '@/shared/api/services/cover.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteCoverPhoto = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (index: number) => CoverService.deletePhoto(index),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get cover'] })
			notificationSuccess('Фото успешно удалено из обложки.')
		},
		onError: () =>
			notificationError(
				'При удаление фото произошла ошибка, попробуйте снова.'
			),
	})

	return {
		mutate,
		isPending,
	}
}
