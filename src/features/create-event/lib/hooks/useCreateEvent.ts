'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { EventService } from '@/shared/api/services/event.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IEvent } from '@/shared/model/types/event.type'

export const useCreateEvent = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: Omit<IEvent, '_id'>) => EventService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all events'] })
			notificationSuccess('Событие успешно добавлено в календарь.')
		},
		onError: () =>
			notificationError(
				'При добавление события произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
