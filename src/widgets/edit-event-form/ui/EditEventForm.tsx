import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditEventForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение события в календаре</SubTitle>
			<Form />
		</section>
	)
}
