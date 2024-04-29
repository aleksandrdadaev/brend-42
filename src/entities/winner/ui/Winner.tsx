'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext } from 'react'

import download from '@/shared/assets/icons/download.svg'
import { getImageUrl } from '@/shared/config/api.config'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IWinner } from '@/shared/model/types/winner.type'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'

import styles from './Winner.module.scss'
import Manage from './manage/Manage'
import { winnerVariants } from './winner-animation'

export const Winner: FC<{ winner: IWinner }> = ({
	winner: { _id, filePath, nameFile, previewPath },
}) => {
	const manage = useContext(ManageContext)

	return (
		<motion.article
			className={styles.wrapper}
			variants={winnerVariants}
			initial='hidden'
			animate='show'
			whileHover={'hover'}
		>
			<div className={styles.top}>
				<div className={styles.img}>
					<Image src={getImageUrl(previewPath)} alt={nameFile} fill />
				</div>
				<Link
					href={getImageUrl(filePath)}
					target='_blank'
					className={styles.link}
				>
					Открыть документ <ButtonIcon icon={download} />
				</Link>
			</div>

			<h3 className={styles.title}>{nameFile}</h3>

			{manage && <Manage id={_id} />}
		</motion.article>
	)
}
