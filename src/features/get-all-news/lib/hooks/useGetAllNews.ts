import { useQuery } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'

export const useGetAllNews = (pageSize?: number, pageNumber?: number) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all news', pageSize, pageNumber],
		queryFn: () => NewsService.getAll(pageSize, pageNumber),
		select: data => data.data.data,
	})

	return {
		newsList: data?.news,
		totalNews: data?.totalNews,
		isLoading,
		isSuccess,
	}
}
