'use client'

import { useQuery } from '@tanstack/react-query'

import { NewsService } from '@/shared/api/services/news.service'

export const useGetNews = (id?: string, slug?: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get news by', id, slug],
		queryFn: () => NewsService.getBy(id, slug),
		select: data => data.data.data,
	})

	return {
		news: data,
		isLoading,
		isSuccess,
	}
}
