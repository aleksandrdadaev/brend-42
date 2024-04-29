'use client'

import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

const Button: FC<
	PropsWithChildren<{
		clickHandler: (event: React.MouseEvent<HTMLElement>) => void
		className?: string
		disabled?: boolean
		del?: boolean
	}>
> = ({ children, clickHandler, className, del = false, disabled = false }) => {
	return (
		<button
			onClick={clickHandler}
			className={clsx(styles.knopka, className, {
				[styles.del]: del,
			})}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
