import { useQuery } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'

export const useGetNomination = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get nomination by id', id],
		queryFn: () => NominationService.getById(id),
		select: data => data.data.data,
	})

	return {
		nomination: data,
		isLoading,
		isSuccess,
	}
}
