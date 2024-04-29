import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateNominationForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление новой номинации</SubTitle>
			<Form />
		</section>
	)
}
