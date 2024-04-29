import { FC } from 'react'

import MiniLoader from '../mini-loader/MiniLoader'

import styles from './QueryLoader.module.scss'

const QueryLoader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<MiniLoader />
		</div>
	)
}

export default QueryLoader
