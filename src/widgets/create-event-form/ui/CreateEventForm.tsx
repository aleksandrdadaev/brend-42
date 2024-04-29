import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateEventForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавления события в календарь</SubTitle>
			<Form />
		</section>
	)
}
