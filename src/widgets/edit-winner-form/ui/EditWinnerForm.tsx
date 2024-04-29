import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditWinnerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение каталога победителей</SubTitle>
			<Form />
		</section>
	)
}
