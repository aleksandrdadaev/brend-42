import { useQuery } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'

export const useGetAllOrganizers = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all organizers'],
		queryFn: () => CompetitionService.getAllOrganizers(),
		select: data => data.data.data,
	})

	return {
		isLoading,
		isSuccess,
		...data,
	}
}
