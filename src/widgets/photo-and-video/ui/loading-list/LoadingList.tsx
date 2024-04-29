import { FC } from 'react'

import { LoaderAlbum } from '@/entities/album'
import { LoaderVideo } from '@/entities/video'

import styles from '../list/List.module.scss'

const LoadingList: FC<{ size1: number; size2: number }> = ({
	size1,
	size2,
}) => {
	const loadings1 = new Array(size1).fill('')
	const loadings2 = new Array(size2).fill('')
	return (
		<div className={styles.list}>
			{loadings1.map((el, index) => (
				<div key={index} className={styles.photo}>
					<LoaderAlbum />
				</div>
			))}
			{loadings2.map((el, index) => (
				<div key={index} className={styles.video}>
					<LoaderVideo />
				</div>
			))}
		</div>
	)
}

export default LoadingList
