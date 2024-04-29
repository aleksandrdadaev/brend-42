import Image from 'next/image'
import { FC } from 'react'

import { IOrganizer } from '@/shared/model/types/organizer.type'

import styles from './FooterOrganizer.module.scss'

export const FooterOrganizer: FC<Omit<IOrganizer, '_id'>> = ({
	logoPath,
	name,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<Image src={logoPath} alt='' fill />
			</div>

			<h3 className={styles.title}>{name}</h3>
		</div>
	)
}
