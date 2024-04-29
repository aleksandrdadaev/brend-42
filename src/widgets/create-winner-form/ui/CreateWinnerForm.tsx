import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const CreateWinnerForm: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>
				Добавление нового каталога победителей
			</SubTitle>
			<Form />
		</section>
	)
}
