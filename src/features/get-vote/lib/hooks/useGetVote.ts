import { useQuery } from '@tanstack/react-query'

import { VoteService } from '@/shared/api/services/vote.service'

export const useGetVote = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get vote'],
		queryFn: () => VoteService.get(),
	})

	return {
		vote: data?.data.data,
		isLoading,
		isSuccess,
	}
}
