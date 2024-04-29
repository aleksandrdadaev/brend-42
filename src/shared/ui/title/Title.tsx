'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

import styles from './Title.module.scss'
import { titleVariants } from './title-animation'

const Title: FC<PropsWithChildren<{ classname?: string }>> = ({
	children,
	classname,
}) => {
	return (
		<motion.h1
			className={clsx(styles.title, classname)}
			variants={titleVariants}
			initial='hidden'
			animate='show'
		>
			{children}
		</motion.h1>
	)
}

export default Title
