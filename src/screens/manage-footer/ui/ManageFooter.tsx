import { FC } from 'react'

import { EditFooterForm } from '@/widgets/edit-footer-form'
import { ManageFooterBlock } from '@/widgets/manage-footer-block'

import styles from './ManageFooter.module.scss'

export const ManageFooter: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageFooterBlock />
			<EditFooterForm />
		</main>
	)
}
