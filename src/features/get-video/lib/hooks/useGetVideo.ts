import { useQuery } from '@tanstack/react-query'

import { VideoService } from '@/shared/api/services/video.service'

export const useGetVideo = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get video by id', id],
		queryFn: () => VideoService.getById(id),
		select: data => data.data.data,
	})

	return {
		video: data,
		isLoading,
		isSuccess,
	}
}
