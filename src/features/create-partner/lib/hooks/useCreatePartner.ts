'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { IPartnerForm } from '@/shared/model/types/partner.type'

export const useCreatePartner = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: IPartnerForm) => {
			const formData = new FormData()
			formData.append('nameOfCompany', data.nameOfCompany)
			formData.append('description', data.description)
			formData.append('logo', data.logo[0])
			return PartnerService.create(formData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get all partners'] })
			notificationSuccess('Успешно добавлен новый партнер.')
		},
		onError: error => {
			notificationError(
				'При добавление партнера произошла ошибка, попробуйте снова.'
			)
		},
	})
	return {
		mutate,
		isPending,
	}
}
