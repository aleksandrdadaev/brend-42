import { AxiosResponse } from 'axios'

import { getEventUrl } from '@/shared/config/api.config'
import {
	createPageNumber,
	createPageSize,
} from '@/shared/lib/utils/create-query-param.util'
import {
	IEvent,
	IEventResponse,
	IEventsResponse,
} from '@/shared/model/types/event.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const EventService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number
	): Promise<AxiosResponse<IEventsResponse>> {
		return axiosClassic.get<IEventsResponse>(
			getEventUrl(
				`/getAll?${createPageSize(pageSize)}${createPageNumber(pageNumber)}`
			)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IEventResponse>> {
		return axiosClassic.get<IEventResponse>(getEventUrl(`/get/${id}`))
	},
	async create(
		data: Omit<IEvent, '_id'>
	): Promise<AxiosResponse<IEventResponse>> {
		return $api.post<IEventResponse>(getEventUrl(`/create`), data)
	},
	async editById(
		data: IEvent,
		id: string
	): Promise<AxiosResponse<IEventResponse>> {
		return $api.put<IEventResponse>(getEventUrl(`/edit/${id}`), data)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getEventUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getEventUrl(`/deleteAll`))
	},
}
