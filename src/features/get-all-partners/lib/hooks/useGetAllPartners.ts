import { useQuery } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'

export const useGetAllPartners = (pageSize?: number, pageNumber?: number) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all partners', pageSize, pageNumber],
		queryFn: () => PartnerService.getAll(pageSize, pageNumber),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
