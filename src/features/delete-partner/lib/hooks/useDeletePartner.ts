'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'

export const useDeletePartner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => PartnerService.deleteById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get all partners'],
			})
			notificationSuccess('Партнер успешно удален.')
		},
		onError: () =>
			notificationError(
				'При удалении партнера произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
