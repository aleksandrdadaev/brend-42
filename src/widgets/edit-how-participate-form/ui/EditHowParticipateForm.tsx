import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditHowParticipateForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение этапа принятия участия</SubTitle>
			<Form />
		</section>
	)
}
