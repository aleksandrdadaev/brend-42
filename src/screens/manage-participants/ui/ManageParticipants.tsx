import { FC } from 'react'

import { ManageParticipantsButtons } from '@/widgets/manage-participants-buttons'
import { ParticipantsWithSearch } from '@/widgets/participants-with-search'

import styles from './ManageParticipants.module.scss'

export const ManageParticipants: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageParticipantsButtons />
			<ParticipantsWithSearch />
		</main>
	)
}
