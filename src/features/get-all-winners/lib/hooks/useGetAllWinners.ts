import { useQuery } from '@tanstack/react-query'

import { WinnerService } from '@/shared/api/services/winner.service'

export const useGetAllWinners = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all winners'],
		queryFn: () => WinnerService.getAll(),
		select: data => data.data.data,
	})

	return {
		winners: data,
		isLoading,
		isSuccess,
	}
}
