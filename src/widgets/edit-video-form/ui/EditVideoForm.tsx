import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditVideoForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение видео</SubTitle>
			<Form />
		</section>
	)
}
