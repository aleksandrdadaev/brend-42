'use client'

import { FC, useState } from 'react'

import { EditNomination } from '@/screens/edit-nomination'

import { IdContext } from '@/shared/lib/utils/context.util'
import { IParamsId } from '@/shared/model/types/url.type'

const page = ({ params }: IParamsId) => {
	const [id, setId] = useState<string>(params.id)
	return (
		<IdContext.Provider value={id}>
			<EditNomination />
		</IdContext.Provider>
	)
}

export default page
