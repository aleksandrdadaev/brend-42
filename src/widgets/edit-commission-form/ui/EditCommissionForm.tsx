import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditCommissionForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Комиссия</SubTitle>
			<Form />
		</section>
	)
}
