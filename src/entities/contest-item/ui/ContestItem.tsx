'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { IContestItem } from '../model/types/contest-item.type'

import styles from './ContestItem.module.scss'
import { contestVariants } from './contest-animation'

export const ContestItem: FC<IContestItem> = ({
	icon,
	postscript,
	text,
	value,
	isBlue,
	isGreen,
	isOrange,
	isDefault,
}) => {
	return (
		<motion.article
			className={clsx(styles.wrapper, {
				[styles.default]: isDefault,
				[styles.blue]: isBlue,
				[styles.orange]: isOrange,
				[styles.green]: isGreen,
			})}
			variants={contestVariants}
			initial='hidden'
			animate='show'
			whileHover={'hover'}
		>
			<div className={styles.imgWrapper}>
				<div className={styles.img}>
					<Image src={icon} alt='' fill />
				</div>
			</div>
			<div>
				{postscript && <span className={styles.postscript}>{postscript}</span>}
				<span className={styles.value}>{value}</span>
			</div>
			<span className={styles.text}>{text}</span>
		</motion.article>
	)
}
