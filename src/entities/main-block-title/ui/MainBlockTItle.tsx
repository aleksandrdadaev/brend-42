'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import {
	mainTitleVariants,
	spanVariants,
} from '../lib/animation/main-title-animation'

import styles from './MainBlockTitle.module.scss'

export const MainBlockTItle: FC = () => {
	return (
		<motion.h2
			className={styles.title}
			variants={mainTitleVariants}
			initial='hidden'
			animate='show'
		>
			<motion.span variants={spanVariants} className={styles.span}>
				Б
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				Р
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				Е
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				Н
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				Д
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				-
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				4
			</motion.span>
			<motion.span variants={spanVariants} className={styles.span}>
				2
			</motion.span>
		</motion.h2>
	)
}
