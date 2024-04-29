import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { NewsPage } from '@/widgets/news-page'

import { INews } from '@/shared/model/types/news.type'

import styles from './News.module.scss'

export const News: FC<{ news: INews }> = ({ news }) => {
	return (
		<main className={styles.page}>
			<BreadCrumbs dynamicName={news.name} />

			<NewsPage news={news} />
		</main>
	)
}
