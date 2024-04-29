import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditPurposeForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение цели конкурса</SubTitle>
			<Form />
		</section>
	)
}
