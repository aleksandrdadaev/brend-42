import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateNewsForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Добавление новости</SubTitle>
			<Form />
		</section>
	)
}
