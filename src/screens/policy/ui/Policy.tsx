import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { PolicyText } from '@/widgets/policy-text'

import { PageTitle } from '@/entities/page-title'

export const Policy: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Политика' />
			<PolicyText />
		</main>
	)
}
