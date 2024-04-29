'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ContactsService } from '@/shared/api/services/contacts.service'
import {
	notificationError,
	notificationSuccess,
} from '@/shared/lib/utils/notification.util'
import { replacePhone } from '@/shared/lib/utils/phone-input.util'
import { IContacts, IContactsForm } from '@/shared/model/types/contacts.type'

export const useEditContacts = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (request: IContactsForm) => {
			const data: Omit<IContacts, '_id'> = {
				email: request.email,
				whatsappLink: request.whatsappLink,
				whatsappNumber: replacePhone(request.whatsappNumber),
				address: [request.firstAddress, request.secondAddress],
				number: [
					replacePhone(request.firstNumber),
					replacePhone(request.secondNumber),
				],
			}
			return ContactsService.edit(data)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get contacts'] })
			notificationSuccess('Контакты успешно изменены.')
		},
		onError: () =>
			notificationError(
				'При изменении контактов произошла ошибка, попробуйте снова.'
			),
	})
	return {
		mutate,
		isPending,
	}
}
