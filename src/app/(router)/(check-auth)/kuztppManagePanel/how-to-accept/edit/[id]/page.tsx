'use client'

import { useState } from 'react'

import { EditParticipate } from '@/screens/edit-participate'

import { IdContext } from '@/shared/lib/utils/context.util'
import { IParamsId } from '@/shared/model/types/url.type'

const page = ({ params }: IParamsId) => {
	const [id, setId] = useState<string>(params.id)
	return (
		<IdContext.Provider value={id}>
			<EditParticipate />
		</IdContext.Provider>
	)
}

export default page
