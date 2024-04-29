import { useQuery } from '@tanstack/react-query'

import { EventService } from '@/shared/api/services/event.service'

export const useGetAllEvents = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get all events'],
		queryFn: () => EventService.getAll(),
	})

	return {
		events: data?.data.data.events,
		totalEvents: data?.data.data.totalEvents,
		isLoading,
		isSuccess,
	}
}
