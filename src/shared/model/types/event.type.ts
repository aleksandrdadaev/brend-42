export interface IEvent {
	_id: string
	name: string
	description: string
	date: string
}

export interface IEventsData {
	events: IEvent[]
	totalEvents?: number
}

export interface IEventsResponse {
	data: IEventsData
	statusCode: number
}

export interface IEventResponse {
	data: IEvent
	statusCode: number
}
