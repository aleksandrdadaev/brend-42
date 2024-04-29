import { useQuery } from '@tanstack/react-query'

import { CoverService } from '@/shared/api/services/cover.service'

export const useGetCover = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get cover'],
		queryFn: () => CoverService.get(),
	})

	return {
		cover: data?.data.data,
		isLoading,
		isSuccess,
		isError,
	}
}
