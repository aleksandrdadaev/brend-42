'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IHowToAcceptForm } from '@/shared/model/types/how-to-accept.type'

export const useEditHowParticipate = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IHowToAcceptForm; id: string }) =>
			HowToAcceptService.edit(request.data, request.id),
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get how participate by id', response.data.data._id],
			})
			notificationSuccess('Этап принятия участия успешно изменен.')
		},
		onError: () =>
			notificationError(
				'При изменении этапа произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
