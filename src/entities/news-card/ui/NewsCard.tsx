'use client'

import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FC, useContext, useState } from 'react'

import { useResize } from '@/shared/lib/hooks/useResize'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { transformIsoToString } from '@/shared/lib/utils/transform-date.util'
import { INews } from '@/shared/model/types/news.type'

import styles from './NewsCard.module.scss'
import NewsImage from './image/NewsImage'
import Manage from './manage/Manage'

export const NewsCard: FC<{ news: INews }> = ({ news }) => {
	const [image, setImage] = useState<boolean>(false)
	const { isDesktop, isLaptop } = useResize()
	const manage = useContext(ManageContext)
	return (
		<article className={styles.card}>
			<Link href={!manage ? `/press-center/${news.slug}` : '#'}>
				<div
					className={styles.text}
					onMouseEnter={() => setImage(true)}
					onMouseLeave={() => setImage(false)}
				>
					<span className={styles.date}>
						{transformIsoToString(news.newsDate)}
					</span>
					<h3 className={styles.title}>{news.name}</h3>
				</div>
				<AnimatePresence>
					{image && (isDesktop || isLaptop) && (
						<NewsImage
							photoPath={news.photoPath}
							photoCaption={news.photoCaption}
						/>
					)}
				</AnimatePresence>
			</Link>
			{manage && <Manage id={news._id} />}
		</article>
	)
}
