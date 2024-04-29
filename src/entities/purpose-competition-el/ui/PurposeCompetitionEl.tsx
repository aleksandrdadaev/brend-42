import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import cupIcon from '@/shared/assets/icons/purpose/cup.svg'
import { IPurpose } from '@/shared/model/types/purpose.type'

import styles from './PurposeCompetitionEl.module.scss'
import { purposeVariants } from './purpose-animation'

export const PurposeCompetitionEl: FC<IPurpose> = ({ text }) => {
	return (
		<motion.article
			className={styles.purpose}
			variants={purposeVariants}
			initial='hidden'
			animate='show'
			whileHover={'hover'}
		>
			<Image src={cupIcon} alt='' className={styles.img} />
			<p className={styles.text}>{text}</p>
		</motion.article>
	)
}
