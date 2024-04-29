import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { PartnersBlock } from '@/widgets/partners-block'

import { PageTitle } from '@/entities/page-title'

export const Partners: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Партнеры' />
			<PartnersBlock />
		</main>
	)
}
