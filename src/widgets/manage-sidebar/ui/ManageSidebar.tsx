import { FC } from 'react'

import styles from './ManageSidebar.module.scss'
import Navigation from './navigation/Navigation'

export const ManageSidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Navigation />
		</aside>
	)
}
