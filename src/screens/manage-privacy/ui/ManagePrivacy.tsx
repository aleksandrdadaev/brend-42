import { FC } from 'react'

import { EditAgreement } from '@/widgets/edit-agreement'
import { EditPrivacy } from '@/widgets/edit-privacy'

import styles from './ManagePrivacy.module.scss'

export const ManagePrivacy: FC = () => {
	return (
		<main className={styles.wrapper}>
			<EditPrivacy />
			<EditAgreement />
		</main>
	)
}
