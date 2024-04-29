import { ChangeEvent } from 'react'

import { ISearchParticipants } from '../../model/types/search-participants.type'

export const useSearchParticipants = ({ setValue }: ISearchParticipants) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value.trim())
	}
	return {
		handleChange,
	}
}
