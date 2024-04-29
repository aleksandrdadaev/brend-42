import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditConditionForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение условий участия</SubTitle>
			<Form />
		</section>
	)
}
