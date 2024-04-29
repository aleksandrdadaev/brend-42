import { useQuery } from '@tanstack/react-query'

import { AgreementService } from '@/shared/api/services/agreement.service'

export const useGetAgreementText = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get agreement'],
		queryFn: () => AgreementService.get(),
	})

	return {
		agreement: data?.data.data,
		isLoading,
	}
}
