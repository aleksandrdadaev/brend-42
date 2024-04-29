import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateParticipantForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление участника</SubTitle>
			<Form />
		</section>
	)
}
