'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IHowToAcceptForm } from '@/shared/model/types/how-to-accept.type'

export const useCreateHowParticipate = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IHowToAcceptForm) => HowToAcceptService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all how participates'] })
			notificationSuccess('Успешно добавлен новый этап принятия участия.')
		},
		onError: () =>
			notificationError(
				'При добавление этапа произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
