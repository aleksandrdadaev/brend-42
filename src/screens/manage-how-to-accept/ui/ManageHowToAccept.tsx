import { FC } from 'react'

import { HowToAccept } from '@/widgets/how-to-accept'
import { ManageHowToAcceptButtons } from '@/widgets/manage-how-to-accept-buttons'

import styles from './ManageHowToAccept.module.scss'

export const ManageHowToAccept: FC = () => {
	return (
		<main className={styles.wrapper}>
			<HowToAccept />
			<ManageHowToAcceptButtons />
		</main>
	)
}
