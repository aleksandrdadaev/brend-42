import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { VotingBlock } from '@/widgets/voting-block'

import { PageTitle } from '@/entities/page-title'

import styles from './Voting.module.scss'

export const Voting: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Голосование' />
			<VotingBlock />
		</main>
	)
}
