'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IPartnerForm } from '@/shared/model/types/partner.type'

export const useEditPartner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: { data: IPartnerForm; id: string }) => {
			const formData = new FormData()
			formData.append('nameOfCompany', request.data.nameOfCompany)
			formData.append('description', request.data.description)
			if (request.data.logo.length)
				formData.append('logo', request.data.logo[0])
			return PartnerService.edit(formData, request.id)
		},

		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['get partner by id', response.data.data._id],
			})
			notificationSuccess('Партнер успешно изменен.')
		},
		onError: () => {
			notificationError(
				'При изменении партнера произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
