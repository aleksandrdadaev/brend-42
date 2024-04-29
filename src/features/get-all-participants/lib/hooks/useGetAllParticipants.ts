import { useQuery } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'

export const useGetAllParticipants = (
	pageSize?: number,
	pageNumber?: number,
	sort?: boolean
) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all participants', pageSize, pageNumber, sort],
		queryFn: () => ParticipantService.getAll(pageSize, pageNumber, sort),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
