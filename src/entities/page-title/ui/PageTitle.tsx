import { FC } from 'react'

import Title from '@/shared/ui/title/Title'

import styles from './PageTitle.module.scss'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
	return (
		<section className={styles.section}>
			<Title>{title}</Title>
		</section>
	)
}
