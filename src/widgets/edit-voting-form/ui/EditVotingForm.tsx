import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './EditVotingForm.module.scss'
import Form from './form/Form'

export const EditVotingForm: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Голосование</SubTitle>
			<Form />
		</section>
	)
}
