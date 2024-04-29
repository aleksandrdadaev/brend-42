import { useMutation, useQueryClient } from '@tanstack/react-query'

import { EventService } from '@/shared/api/services/event.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllEvents = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => EventService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all events'] })
			notificationSuccess('Все события календаря успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удаление событий произошла ошибка, попробуйте снова.'
			),
	})

	return {
		mutate,
		isPending,
	}
}
