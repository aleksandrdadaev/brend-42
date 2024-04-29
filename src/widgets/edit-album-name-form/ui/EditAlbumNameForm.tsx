import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditAlbumNameForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение названия альбома</SubTitle>
			<Form />
		</section>
	)
}
