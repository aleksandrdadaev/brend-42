import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllNominations = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => NominationService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all nominations'],
			})
			notificationSuccess('Номинации успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении номинаций произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
