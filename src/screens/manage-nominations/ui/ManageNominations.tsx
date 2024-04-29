import { FC } from 'react'

import { ManageNominationsButtons } from '@/widgets/manage-nominations-buttons'
import { Nominations } from '@/widgets/nominations'

import styles from './ManageNominations.module.scss'

export const ManageNominations: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Nominations />
			<ManageNominationsButtons />
		</main>
	)
}
