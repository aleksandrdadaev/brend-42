import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './CardTitle.module.scss'

const CardTitle: FC<PropsWithChildren<{ classname?: string }>> = ({
	children,
	classname,
}) => {
	return <h3 className={clsx(styles.cardTitle, classname)}>{children}</h3>
}

export default CardTitle
