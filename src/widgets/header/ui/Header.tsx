'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import { OpenNav } from '@/features/open-nav'

import { HeaderLink } from '@/entities/header-link'

import Logo from '@/shared/ui/logo/Logo'

import { headerVariants } from '../lib/animation/header-animation'
import { useScrollHeader } from '../lib/hooks/useScrollHeader'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const { debouncedValue } = useScrollHeader()

	return (
		<>
			<AnimatePresence>
				{debouncedValue === 'top' ? (
					<motion.header
						key='header'
						className={styles.header}
						variants={headerVariants}
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						<OpenNav />
						<Logo />
						<HeaderLink />
					</motion.header>
				) : (
					<></>
				)}
			</AnimatePresence>
		</>
	)
}
