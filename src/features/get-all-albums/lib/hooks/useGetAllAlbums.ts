import { useQuery } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'

export const useGetAllAlbums = (pageSize?: number, pageNumber?: number) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all albums', pageSize, pageNumber],
		queryFn: () => AlbumService.getAll(pageSize, pageNumber),
		select: data => data.data.data,
	})

	return {
		...data,
		isLoading,
		isSuccess,
	}
}
