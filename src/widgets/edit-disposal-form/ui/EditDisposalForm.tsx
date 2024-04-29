import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditDisposalForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Распоряжение</SubTitle>
			<Form />
		</section>
	)
}
