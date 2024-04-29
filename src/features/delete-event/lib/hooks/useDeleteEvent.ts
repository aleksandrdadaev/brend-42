import { useMutation, useQueryClient } from '@tanstack/react-query'

import { EventService } from '@/shared/api/services/event.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteEvent = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => EventService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all events'] })
			notificationSuccess('Событие успешно удалено из календаря.')
		},
		onError: () =>
			notificationError(
				'При удаление события произошла ошибка, попробуйте снова.'
			),
	})

	return {
		mutate,
		isPending,
	}
}
