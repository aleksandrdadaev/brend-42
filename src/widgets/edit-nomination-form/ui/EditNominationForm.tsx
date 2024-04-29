import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditNominationForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение номинации</SubTitle>
			<Form />
		</section>
	)
}
