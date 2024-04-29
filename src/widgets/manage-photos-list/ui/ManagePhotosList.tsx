import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import List from './list/List'

export const ManagePhotosList: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Фото</SubTitle>
			<List />
		</section>
	)
}
