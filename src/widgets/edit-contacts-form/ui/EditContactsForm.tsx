import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditContactsForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение контактов</SubTitle>
			<Form />
		</section>
	)
}
