import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateVideoForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление нового видео</SubTitle>
			<Form />
		</section>
	)
}
