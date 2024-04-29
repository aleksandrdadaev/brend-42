import { useQuery } from '@tanstack/react-query'

import { ConditionService } from '@/shared/api/services/condition.service'

export const useGetCondition = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get condition'],
		queryFn: () => ConditionService.get(),
	})

	return {
		condition: data?.data.data,
		isLoading,
		isSuccess,
	}
}
