import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateOrganizerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавления организатора конкурса</SubTitle>
			<Form />
		</section>
	)
}
