import { FC } from 'react'

import { ManageWinnersButtons } from '@/widgets/manage-winners-buttons'
import { WinnersBlock } from '@/widgets/winners-block'

import styles from './ManageWinners.module.scss'

export const ManageWinners: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageWinnersButtons />
			<WinnersBlock />
		</main>
	)
}
