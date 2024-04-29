import { FC } from 'react'

import { Condition } from '@/widgets/condition'
import { EditConditionForm } from '@/widgets/edit-condition-form'

import styles from './ManageCondition.module.scss'

export const ManageCondition: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Condition />
			<EditConditionForm />
		</main>
	)
}
