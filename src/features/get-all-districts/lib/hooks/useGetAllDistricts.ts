import { useQuery } from '@tanstack/react-query'

import { DistrictService } from '@/shared/api/services/district.service'

export const useGetAllDistricts = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all districts'],
		queryFn: () => DistrictService.getAll(),
		select: data => data.data.data,
	})

	return {
		districts: data,
		isLoading,
		isSuccess,
	}
}
