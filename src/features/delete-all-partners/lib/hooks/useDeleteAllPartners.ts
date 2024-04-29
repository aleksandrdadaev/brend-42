'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeleteAllPartners = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => PartnerService.deleteAll(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all partners'],
			})
			notificationSuccess('Все партнеры успешно удалены.')
		},
		onError: () =>
			notificationError(
				'При удалении партнеров произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
