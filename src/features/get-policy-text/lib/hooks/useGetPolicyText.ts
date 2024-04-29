import { useQuery } from '@tanstack/react-query'

import { PrivacyService } from '@/shared/api/services/privacy.service'

export const useGetPolicyText = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get policy'],
		queryFn: () => PrivacyService.get(),
	})

	return {
		policy: data?.data.data,
		isLoading,
	}
}
