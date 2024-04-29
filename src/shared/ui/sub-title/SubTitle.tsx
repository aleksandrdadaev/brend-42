'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

import styles from './SubTitle.module.scss'
import { subTitleVariants } from './sub-title-animation'

const SubTitle: FC<
	PropsWithChildren<{ classname?: string; animate?: boolean }>
> = ({ children, classname, animate = true }) => {
	return (
		<motion.h2
			className={clsx(styles.subTitle, classname)}
			variants={animate ? subTitleVariants : undefined}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			{children}
		</motion.h2>
	)
}

export default SubTitle
