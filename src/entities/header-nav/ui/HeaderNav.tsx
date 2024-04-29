import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { headerNavVariants } from '../lib/animation/header-nav-animation'

import styles from './HeaderNav.module.scss'
import NavList from './nav-list/NavList'

export const HeaderNav = forwardRef<HTMLElement>(({}, forwardRef: any) => {
	return (
		<motion.nav
			className={styles.nav}
			variants={headerNavVariants}
			initial='hidden'
			animate='show'
			exit='hidden'
			ref={forwardRef}
		>
			<NavList />
		</motion.nav>
	)
})
