import { useQuery } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'

export const useGetAllVideos = (pageSize?: number, pageNumber?: number) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all videos', pageSize, pageNumber],
		queryFn: () => VideoService.getAll(pageSize, pageNumber),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
