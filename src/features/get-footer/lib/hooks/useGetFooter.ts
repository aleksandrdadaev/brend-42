import { useQuery } from '@tanstack/react-query'

import { FooterService } from '@/shared/api/services/footer.service'

export const useGetFooter = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get footer'],
		queryFn: () => FooterService.get(),
	})

	return {
		footer: data?.data.data,
		isLoading,
		isSuccess,
		isError,
	}
}
