import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditOrganizerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение организатора конкурса</SubTitle>
			<Form />
		</section>
	)
}
