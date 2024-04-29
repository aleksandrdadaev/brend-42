import { useQuery } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'

export const useGetContest = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get contest'],
		queryFn: () => CompetitionService.getContest(),
		select: data => data.data.data,
	})

	return {
		isLoading,
		isSuccess,
		...data,
	}
}
