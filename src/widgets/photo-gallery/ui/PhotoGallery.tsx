'use client'

import { FC, useContext, useState } from 'react'

import { useGetAllAlbums } from '@/features/get-all-albums'
import { usePagination } from '@/features/pagination'
import { ShowMoreButton } from '@/features/show-more-button'

import { Album, LoaderAlbum } from '@/entities/album'

import { ManageContext } from '@/shared/lib/utils/context.util'
import { IAlbum } from '@/shared/model/types/album.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './PhotoGallery.module.scss'

export const PhotoGallery: FC = () => {
	const manage = useContext(ManageContext)
	const [pageSize, setPageSize] = useState<number>(6)
	const [pageNumber, setPageNumber] = useState<number>(1)

	const { isLoading, isSuccess, albums, totalAlbums } = useGetAllAlbums(
		!manage ? pageSize : undefined,
		!manage ? pageNumber : undefined
	)

	const { list, showMore } = usePagination<IAlbum>({
		isSuccess,
		pageNumber,
		pageSize,
		elements: albums,
		totalElements: totalAlbums,
	})

	const loadings = new Array(pageSize).fill('')
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={!manage}>Фотогалерея</SubTitle>
			<div className={styles.right}>
				<div className={styles.list}>
					{isLoading &&
						!list.length &&
						loadings.map((el, index) => <LoaderAlbum key={index} />)}
					{!manage &&
						list.length > 0 &&
						list.map(album => <Album album={album} key={album._id} />)}
					{manage &&
						isSuccess &&
						albums?.map(album => <Album album={album} key={album._id} />)}
				</div>
				{!manage && showMore && (
					<ShowMoreButton
						text='Показать больше'
						clickHandler={() => setPageNumber(prev => prev + 1)}
						isLoading={isLoading}
					/>
				)}
			</div>
		</section>
	)
}
