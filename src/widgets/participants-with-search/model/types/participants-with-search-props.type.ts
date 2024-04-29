import { IParticipant } from '@/shared/model/types/participant.type'

export interface IParticipantsWithSearchProps {
	participants: IParticipant[] | undefined
	isSuccess: boolean
	totalParticipants: number | undefined
	pageSize: number
	pageNumber: number
	refetchState: boolean
	debouncedValue: string
}
