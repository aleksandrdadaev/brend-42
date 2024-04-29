import Link from 'next/link'
import { FC } from 'react'

import styles from './AuthHeader.module.scss'

export const AuthHeader: FC = () => {
	return (
		<header className={styles.header}>
			<Link href={'/'}>На главную</Link>
		</header>
	)
}
