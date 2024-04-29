'use client'

import { FC } from 'react'

import { useGetAllWinners } from '@/features/get-all-winners'

import { LoaderWinner, Winner } from '@/entities/winner'

import styles from './List.module.scss'

const List: FC = () => {
	const { isLoading, isSuccess, winners } = useGetAllWinners()
	const loadings = new Array(9).fill('')
	return (
		<div className={styles.list}>
			{isLoading && loadings.map((el, index) => <LoaderWinner key={index} />)}
			{isSuccess &&
				winners?.map(winner => <Winner winner={winner} key={winner._id} />)}
		</div>
	)
}

export default List
