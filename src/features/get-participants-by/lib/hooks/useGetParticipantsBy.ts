import { useQuery } from '@tanstack/react-query'

import { ParticipantService } from '@/shared/api/services/participant.service'

export const useGetParticipantsBy = (
	id?: string,
	name?: string,
	district?: string[]
) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get participants by', id, name, district],
		queryFn: () => ParticipantService.getBy(id, name, district),
		select: data => data.data.data,
		enabled: !!id || !!name || (!!district && district.length > 0),
	})

	return {
		participants: data,
		isLoading,
		isSuccess,
	}
}
