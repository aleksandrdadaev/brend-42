'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext, useState } from 'react'

import downloadIcon from '@/shared/assets/icons/nomination/download.svg'
import logoIcon from '@/shared/assets/icons/nomination/logo.svg'
import { getImageUrl } from '@/shared/config/api.config'
import { useResize } from '@/shared/lib/hooks/useResize'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { INomination } from '@/shared/model/types/nomination.type'

import styles from './Nomination.module.scss'
import {
	backAnimation,
	cardAnimation,
	cardAnimationTablet,
	frontAnimation,
} from './animation/card.animation'
import Manage from './manage/Manage'

export const Nomination: FC<{ nomination: INomination }> = ({
	nomination: { _id, description, filePath, name },
}) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const { isMobile, isTablet } = useResize()
	const manage = useContext(ManageContext)
	return (
		<motion.article
			className={styles.nomination}
			variants={isMobile || isTablet ? cardAnimationTablet : cardAnimation}
			initial='hidden'
			animate={isHovered ? 'hover' : 'show'}
			whileHover='hover'
			onTouchStart={() => setIsHovered(prev => !prev)}
		>
			<motion.div className={styles.front} variants={frontAnimation}>
				<div className={styles.logoWrapper}>
					<Image src={logoIcon} alt='' className={styles.logo} />
				</div>
				<h3 className={styles.title}>{name}</h3>
			</motion.div>
			<motion.div className={styles.back} variants={backAnimation}>
				<p className={styles.description}>{description}</p>
				{filePath && (
					<Link
						href={getImageUrl(filePath)}
						download
						target='_blank'
						data-tooltip='Скачать форму заявки'
					>
						<Image src={downloadIcon} alt='' className={styles.download} />
					</Link>
				)}
			</motion.div>
			{manage && <Manage id={_id} />}
		</motion.article>
	)
}
