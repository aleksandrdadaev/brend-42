import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditFooterForm: FC = () => {
	return (
		<section className='w-fit'>
			<SubTitle animate={false}>Изменение фото в подвале</SubTitle>
			<Form />
		</section>
	)
}
