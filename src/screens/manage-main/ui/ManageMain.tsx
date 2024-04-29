import { FC } from 'react'

import { AddCoverForm } from '@/widgets/add-cover-form'
import { CoverManageList } from '@/widgets/cover-manage-list'

import styles from './ManageMain.module.scss'

export const ManageMain: FC = () => {
	return (
		<main className={styles.wrapper}>
			<CoverManageList />
			<AddCoverForm />
		</main>
	)
}
