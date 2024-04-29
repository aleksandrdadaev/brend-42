'use client'

import { motion } from 'framer-motion'
import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import { IHowToAccept } from '@/shared/model/types/how-to-accept.type'

import styles from './HowParticipate.module.scss'
import Manage from './manage/Manage'
import { participateVariants, positionVariants } from './paticipate-animation'

export const HowParticipate: FC<{
	participate: IHowToAccept
	position: number
}> = ({ position, participate: { _id, text } }) => {
	const manage = useContext(ManageContext)

	return (
		<motion.article
			className={styles.wrapper}
			variants={participateVariants}
			initial='hidden'
			animate='show'
			whileHover={'hover'}
		>
			<motion.span className={styles.position} variants={positionVariants}>
				{position}
			</motion.span>
			<h3 className={styles.text}>{text}</h3>
			{manage && <Manage id={_id} />}
		</motion.article>
	)
}
