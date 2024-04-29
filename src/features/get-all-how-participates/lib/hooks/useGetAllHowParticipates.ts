import { useQuery } from '@tanstack/react-query'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'

export const useGetAllHowParticipates = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all how participates'],
		queryFn: () => HowToAcceptService.getAll(),
		select: data => data.data.data,
	})

	return {
		howParticipates: data?.howParticipates,
		totalHowParticipates: data?.totalHowParticipates,
		isLoading,
		isSuccess,
	}
}
