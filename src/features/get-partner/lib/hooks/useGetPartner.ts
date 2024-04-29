import { useQuery } from '@tanstack/react-query'

import { PartnerService } from '@/shared/api/services/partner.service'

export const useGetPartner = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get partner by id', id],
		queryFn: () => PartnerService.getById(id),
		select: data => data.data.data,
	})

	return {
		partner: data,
		isLoading,
		isSuccess,
	}
}
