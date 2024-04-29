import { useQuery } from '@tanstack/react-query'

import { ContactsService } from '@/shared/api/services/contacts.service'

export const useGetContacts = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get contacts'],
		queryFn: () => ContactsService.get(),
	})

	return {
		contacts: data?.data.data,
		isLoading,
		isSuccess,
		isError,
	}
}
