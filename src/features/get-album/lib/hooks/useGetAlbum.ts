import { useQuery } from '@tanstack/react-query'

import { AlbumService } from '@/shared/api/services/album.service'

export const useGetAlbum = (id: string) => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get album by id', id],
		queryFn: () => AlbumService.getById(id),
		select: data => data.data.data,
	})

	return {
		album: data,
		isLoading,
		isSuccess,
	}
}
