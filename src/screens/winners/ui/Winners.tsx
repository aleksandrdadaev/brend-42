import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { WinnersBlock } from '@/widgets/winners-block'

import { PageTitle } from '@/entities/page-title'

export const Winners: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Победители' />
			<WinnersBlock />
		</main>
	)
}
