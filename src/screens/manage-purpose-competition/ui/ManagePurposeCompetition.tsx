import { FC } from 'react'

import { EditPurposeForm } from '@/widgets/edit-purpose-form'
import { PurposeCompetition } from '@/widgets/purpose-competition'

import styles from './ManagePurposeCompetition.module.scss'

export const ManagePurposeCompetition: FC = () => {
	return (
		<main className={styles.wrapper}>
			<PurposeCompetition />
			<EditPurposeForm />
		</main>
	)
}
