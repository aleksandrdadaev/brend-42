'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { VoteService } from '@/shared/api/services/vote.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IVote } from '@/shared/model/types/vote.type'

export const useEditVote = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IVote) => {
			const request: IVote = {
				...data,
				votingId: Number(data.votingId),
			}
			return VoteService.edit(data)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get vote'] })
			notificationSuccess('Голосование успешно изменено.')
		},
		onError: () =>
			notificationError(
				'При изменении голосования произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
