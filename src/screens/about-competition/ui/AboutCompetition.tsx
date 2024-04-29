import { FC } from 'react'

import { AboutCompetitionBlock } from '@/widgets/about-competition'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { Calendar } from '@/widgets/calendar'

import { PageTitle } from '@/entities/page-title'

export const AboutCompetition: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='О конкурсе' />
			<AboutCompetitionBlock />
			<Calendar />
		</main>
	)
}
