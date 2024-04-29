import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateAlbumForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление нового альбома</SubTitle>
			<Form />
		</section>
	)
}
