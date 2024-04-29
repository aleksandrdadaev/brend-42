import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateHowParticipateForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление этапа принятия участия</SubTitle>
			<Form />
		</section>
	)
}
