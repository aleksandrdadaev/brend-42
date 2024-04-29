import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './ManageButtons.module.scss'

export const ManageButtons: FC<PropsWithChildren<{ classname?: string }>> = ({
	children,
	classname,
}) => {
	return <div className={clsx(styles.buttons, classname)}>{children}</div>
}
