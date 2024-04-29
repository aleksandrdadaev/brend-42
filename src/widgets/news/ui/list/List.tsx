'use client'

import { FC, useContext, useState } from 'react'

import { useGetAllNews } from '@/features/get-all-news'
import { usePagination } from '@/features/pagination'
import { ShowMoreButton } from '@/features/show-more-button'

import { LoaderNewsCard, NewsCard } from '@/entities/news-card'

import { ManageContext } from '@/shared/lib/utils/context.util'
import { INews } from '@/shared/model/types/news.type'

import styles from './List.module.scss'

const List: FC = () => {
	const manage = useContext(ManageContext)
	const [pageSize, setPageSize] = useState<number>(7)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const { isLoading, isSuccess, newsList, totalNews } = useGetAllNews(
		!manage ? pageSize : undefined,
		!manage ? pageNumber : undefined
	)

	const { list, showMore } = usePagination<INews>({
		isSuccess,
		pageNumber,
		pageSize,
		elements: newsList,
		totalElements: totalNews,
	})
	const loadings = new Array(pageSize).fill('')

	return (
		<div className={styles.wrapper}>
			<div className={styles.list}>
				{isLoading &&
					!list.length &&
					loadings.map((el, index) => <LoaderNewsCard key={index} />)}

				{!manage &&
					list.length > 0 &&
					list.map(newsItem => <NewsCard news={newsItem} key={newsItem._id} />)}
				{manage &&
					isSuccess &&
					newsList?.map(newsItem => (
						<NewsCard news={newsItem} key={newsItem._id} />
					))}
			</div>
			{!manage && showMore && (
				<ShowMoreButton
					text='Показать больше'
					clickHandler={() => setPageNumber(prev => prev + 1)}
					isLoading={isLoading}
				/>
			)}
		</div>
	)
}

export default List
