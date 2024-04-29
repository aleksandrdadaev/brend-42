import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IContest } from '@/shared/model/types/info-competition.type'

export const useEditContest = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IContest) => CompetitionService.editContest(data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get contest'],
			})
			notificationSuccess('Информация о конкурсе изменена.')
		},
		onError: () =>
			notificationError(
				'При изменении информации о конкурсе произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
