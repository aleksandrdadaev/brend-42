import { FC } from 'react'

import { EditVotingForm } from '@/widgets/edit-voting-form'

import styles from './ManageVoting.module.scss'

export const ManageVoting: FC = () => {
	return (
		<main>
			<EditVotingForm />
		</main>
	)
}
