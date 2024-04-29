import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useContext } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IOrganizer } from '@/shared/model/types/organizer.type'

import styles from './Organizer.module.scss'
import Manage from './manage/Manage'
import { organizerVariants } from './oragnizer-animation'

export const Organizer: FC<{ organizer: IOrganizer }> = ({
	organizer: { _id, logoPath, name },
}) => {
	const manage = useContext(ManageContext)

	return (
		<motion.article
			className={styles.organizer}
			variants={organizerVariants}
			initial='hidden'
			animate='show'
			whileHover='hover'
		>
			{manage && <Manage id={_id} />}
			<div className={styles.img}>
				<Image src={getImageUrl(logoPath)} alt='' fill />
			</div>

			<h4 className={styles.title}>{name}</h4>
		</motion.article>
	)
}
