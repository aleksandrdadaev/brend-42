import { FC } from 'react'

import { ManagePartnersButtons } from '@/widgets/manage-partners-buttons'
import { PartnersBlock } from '@/widgets/partners-block'

import styles from './ManagePartners.module.scss'

export const ManagePartners: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManagePartnersButtons />
			<PartnersBlock />
		</main>
	)
}
