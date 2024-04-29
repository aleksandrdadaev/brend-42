'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ConditionService } from '@/shared/api/services/condition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IConditionForm } from '@/shared/model/types/condition.type'

export const useEditCondition = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IConditionForm) => ConditionService.edit(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get condition'] })
			notificationSuccess('Условия участия успешно изменены.')
		},
		onError: () =>
			notificationError(
				'При изменении условий участия произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
