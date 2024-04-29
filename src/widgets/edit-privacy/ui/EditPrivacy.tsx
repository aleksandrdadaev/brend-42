import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import Form from './form/Form'

export const EditPrivacy: FC = () => {
	return (
		<section>
			<SubTitle animate={false}>Политика</SubTitle>
			<Form />
		</section>
	)
}
