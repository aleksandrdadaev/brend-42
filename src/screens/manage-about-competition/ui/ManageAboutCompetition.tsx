import { FC } from 'react'

import { AboutCompetitionBlock } from '@/widgets/about-competition'
import { EditContestForm } from '@/widgets/edit-contest-form'
import { ManageAboutCompetitionButtons } from '@/widgets/manage-about-competition-buttons'

import styles from './ManageAboutCompetition.module.scss'

export const ManageAboutCompetition: FC = () => {
	return (
		<main className={styles.wrapper}>
			<AboutCompetitionBlock />
			<EditContestForm />
			<ManageAboutCompetitionButtons />
		</main>
	)
}
