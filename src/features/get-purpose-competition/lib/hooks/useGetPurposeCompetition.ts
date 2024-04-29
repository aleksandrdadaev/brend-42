import { useQuery } from '@tanstack/react-query'

import { CompetitionService } from '@/shared/api/services/competition.service'

export const useGetPurposeCompetition = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get purpose competition'],
		queryFn: () => CompetitionService.getPurpose(),
		select: data => data.data.data,
	})

	return {
		text: data?.text,
		isLoading,
		isSuccess,
	}
}
