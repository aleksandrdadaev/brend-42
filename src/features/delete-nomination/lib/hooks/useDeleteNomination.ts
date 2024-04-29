import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteNomination = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => NominationService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all nominations'],
			})
			notificationSuccess('Номинация успешно удалена.')
		},
		onError: () =>
			notificationError(
				'При удалении номинации произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
