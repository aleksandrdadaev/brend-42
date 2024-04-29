import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditAgreement: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Пользовательское соглашение</SubTitle>
			<Form />
		</section>
	)
}
