import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditNewsForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение Новости</SubTitle>
			<Form />
		</section>
	)
}
