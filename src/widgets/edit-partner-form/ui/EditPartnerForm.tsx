import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditPartnerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение партнера</SubTitle>
			<Form />
		</section>
	)
}
