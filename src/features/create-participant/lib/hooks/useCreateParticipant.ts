'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IParticipantForm } from '@/shared/model/types/participant.type'

export const useCreateParticipant = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IParticipantForm) => {
			const formData = new FormData()
			formData.append('nameOfBrand', data.nameOfBrand)
			formData.append('nameOfCompany', data.nameOfCompany)
			formData.append('address', data.address)
			formData.append('description', data.description)
			formData.append('district', data.district)
			formData.append('logo', data.logo[0])
			return ParticipantService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all participants'] })
			notificationSuccess('Успешно добавлен новый участник.')
		},
		onError: () => {
			notificationError(
				'При добавление участника произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
