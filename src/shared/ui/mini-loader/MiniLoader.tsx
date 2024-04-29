import { FC } from 'react'

import styles from './MiniLoader.module.scss'

const MiniLoader: FC = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
		</div>
	)
}

export default MiniLoader
