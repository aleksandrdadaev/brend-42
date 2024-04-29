import { useQuery } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'

export const useGetParticipantsByDistrict = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get participants by district', id],
		queryFn: () => ParticipantService.getByDistrict(id),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
