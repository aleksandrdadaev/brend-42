import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreatePartnerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление нового партнера</SubTitle>
			<Form />
		</section>
	)
}
