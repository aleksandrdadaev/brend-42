import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './AddCoverForm.module.scss'
import Form from './form/Form'

export const AddCoverForm: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Добавление фото в обложку</SubTitle>
			<Form />
		</section>
	)
}
