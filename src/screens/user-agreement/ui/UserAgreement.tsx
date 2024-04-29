import { FC } from 'react'

import { AgreementText } from '@/widgets/agreement-text'
import { BreadCrumbs } from '@/widgets/bread-crumbs'

import { PageTitle } from '@/entities/page-title'

export const UserAgreement: FC = () => {
	return (
		<main>
			<BreadCrumbs />
			<PageTitle title='Пользовательское соглашение' />
			<AgreementText />
		</main>
	)
}
