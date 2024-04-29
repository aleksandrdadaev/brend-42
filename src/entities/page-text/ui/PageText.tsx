import { FC, PropsWithChildren } from 'react'

import styles from './PageText.module.scss'

export const PageText: FC<PropsWithChildren> = ({ children }) => {
	return <p className={styles.text}>{children}</p>
}
