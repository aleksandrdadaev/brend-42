'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import { loadingVariants } from '../lib/animation/loading-animation'

import styles from './AuthLoading.module.scss'

export const AuthLoading: FC = () => {
	return (
		<AnimatePresence>
			<motion.main
				className={styles.loader}
				variants={loadingVariants}
				initial='hidden'
				animate='show'
				exit='hidden'
			>
				<MiniLoader />
			</motion.main>
		</AnimatePresence>
	)
}
