import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditClauseForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Положение</SubTitle>
			<Form />
		</section>
	)
}
