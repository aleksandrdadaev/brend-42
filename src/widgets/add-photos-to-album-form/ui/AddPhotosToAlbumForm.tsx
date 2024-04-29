import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const AddPhotosToAlbumForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление фото в альбом</SubTitle>
			<Form />
		</section>
	)
}
