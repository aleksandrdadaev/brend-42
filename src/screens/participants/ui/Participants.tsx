import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { Condition } from '@/widgets/condition'
import { Nominations } from '@/widgets/nominations'
import { ParticipantsWithSearch } from '@/widgets/participants-with-search'

import { PageTitle } from '@/entities/page-title'

import styles from './Participants.module.scss'

export const Participants: FC = () => {
	return (
		<main className={styles.wrapper}>
			<BreadCrumbs />
			<PageTitle title='Участникам' />
			<Nominations />
			<Condition />
			<ParticipantsWithSearch />
		</main>
	)
}
