import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllOrganizers = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => CompetitionService.deleteAllOrganizers(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all organizers'] })
			notificationSuccess('Все организаторы конкурса удалены.')
		},
		onError: () =>
			notificationError(
				'При удаление организаторов конкурса произошла ошибка, попробуйте снова.'
			),
	})

	return {
		mutate,
		isPending,
	}
}
