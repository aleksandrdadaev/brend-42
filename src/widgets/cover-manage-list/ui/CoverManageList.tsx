'use client'

import { FC } from 'react'
import { toast } from 'react-toastify'

import { useGetCover } from '@/features/get-cover'

import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './CoverManageList.module.scss'
import List from './list/List'

export const CoverManageList: FC = () => {
	const { cover, isLoading, isSuccess, isError } = useGetCover()

	return (
		<section className={styles.wrapper}>
			<SubTitle animate={false}>Обложка</SubTitle>
			{isLoading && <MiniLoader />}
			{isSuccess && <List photos={cover?.photosPath || []} />}
			{isError && (
				<span className='block T3'>Не удалось загрузить фото обложки.</span>
			)}
		</section>
	)
}
