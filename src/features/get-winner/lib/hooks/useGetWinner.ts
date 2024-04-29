import { useQuery } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'

export const useGetWinner = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get winner by id', id],
		queryFn: () => WinnerService.getById(id),
		select: data => data.data.data,
	})

	return {
		winner: data,
		isLoading,
		isSuccess,
	}
}
