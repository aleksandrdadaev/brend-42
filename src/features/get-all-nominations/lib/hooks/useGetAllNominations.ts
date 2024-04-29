import { useQuery } from '@tanstack/react-query'

import { NominationService } from '@/shared/api/services/nomination.service'

export const useGetAllNominations = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all nominations'],
		queryFn: () => NominationService.getAll(),
		select: data => data.data.data,
	})

	return {
		nominations: data?.nominations,
		totalNominations: data?.totalNominations,
		isLoading,
		isSuccess,
	}
}
