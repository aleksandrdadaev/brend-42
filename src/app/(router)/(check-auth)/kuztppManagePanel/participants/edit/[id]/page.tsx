'use client'

import { useState } from 'react'

import { EditParticipant } from '@/screens/edit-participant'

import { IdContext } from '@/shared/lib/utils/context.util'
import { IParamsId } from '@/shared/model/types/url.type'

const page = ({ params }: IParamsId) => {
	const [id, setId] = useState<string>(params.id)
	return (
		<IdContext.Provider value={id}>
			<EditParticipant />
		</IdContext.Provider>
	)
}

export default page
