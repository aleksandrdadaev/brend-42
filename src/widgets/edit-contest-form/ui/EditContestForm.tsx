import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditContestForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Изменение информации о конкурсе</SubTitle>
			<Form />
		</section>
	)
}
