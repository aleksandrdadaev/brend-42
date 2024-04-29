'use client'

import { useState } from 'react'

import { EditEvent } from '@/screens/edit-event'

import { IdContext } from '@/shared/lib/utils/context.util'
import { IParamsId } from '@/shared/model/types/url.type'

const page = ({ params }: IParamsId) => {
	const [id, setId] = useState<string>(params.id)
	return (
		<IdContext.Provider value={id}>
			<EditEvent />
		</IdContext.Provider>
	)
}

export default page
