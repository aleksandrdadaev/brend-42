import { FC } from 'react'

import { transformIsoToString } from '@/shared/lib/utils/transform-date.util'
import { INews } from '@/shared/model/types/news.type'

import styles from './NewsPage.module.scss'
import Photo from './photo/Photo'

export const NewsPage: FC<{ news: INews }> = ({ news }) => {
	return (
		<section className={styles.wrapper}>
			<span className={styles.date}>{transformIsoToString(news.newsDate)}</span>
			<div className={styles.content}>
				<h1 className={styles.title}>{news.name}</h1>
				<Photo caption={news.photoCaption} path={news.photoPath} />
				<p className={styles.text}>{news.newsText}</p>
			</div>
		</section>
	)
}
