import { FC } from 'react'

import { EditClauseForm } from '@/widgets/edit-clause-form'
import { EditCommissionForm } from '@/widgets/edit-commission-form'
import { EditDisposalForm } from '@/widgets/edit-disposal-form'

import styles from './ManageDocuments.module.scss'

export const ManageDocuments: FC = () => {
	return (
		<main className={styles.wrapper}>
			<EditDisposalForm />
			<EditClauseForm />
			<EditCommissionForm />
		</main>
	)
}
