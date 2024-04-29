import { useQuery } from '@tanstack/react-query'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'

export const useGetHowParticipate = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get how participate by id', id],
		queryFn: () => HowToAcceptService.getById(id),
		select: data => data.data.data,
	})

	return {
		howParticipate: data,
		isLoading,
		isSuccess,
	}
}
