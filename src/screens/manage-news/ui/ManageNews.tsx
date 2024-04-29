import { FC } from 'react'

import { ManageNewsButtons } from '@/widgets/manage-news-buttons'
import { News } from '@/widgets/news'

import styles from './ManageNews.module.scss'

export const ManageNews: FC = () => {
	return (
		<main className={styles.wrapper}>
			<ManageNewsButtons />
			<News />
		</main>
	)
}
