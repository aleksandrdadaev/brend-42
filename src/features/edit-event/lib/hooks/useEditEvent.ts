'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { EventService } from '@/shared/api/services/event.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IEvent } from '@/shared/model/types/event.type'

export const useEditEvent = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IEvent) => EventService.editById(data, data._id),
		onSuccess: data => {
			queryClient.invalidateQueries({
				queryKey: ['get event by id', data.data.data._id],
			})
			notificationSuccess('Событие в календаре успешно изменено.')
		},
		onError: () =>
			notificationError(
				'При изменении события произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
