'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IParticipantForm } from '@/shared/model/types/participant.type'

export const useEditParticipant = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IParticipantForm; id: string }) => {
			const formData = new FormData()
			formData.append('nameOfBrand', request.data.nameOfBrand)
			formData.append('nameOfCompany', request.data.nameOfCompany)
			formData.append('address', request.data.address)
			formData.append('description', request.data.description)
			formData.append('district', request.data.district)
			if (request.data.logo.length > 0)
				formData.append('logo', request.data.logo[0])
			return ParticipantService.edit(formData, request.id)
		},

		onSuccess: ({ data: { data } }) => {
			queryClient.invalidateQueries({
				queryKey: ['get participants by', data._id],
			})
			notificationSuccess('Участник успешно изменен.')
		},
		onError: () => {
			notificationError(
				'При изменении участника произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
