import Link from 'next/link'
import { FC } from 'react'

import { createPhoneNumber } from '@/shared/lib/utils/create-phone-number.util'

import { IContactMap } from '../model/types/contact-map.type'

import styles from './ContactMap.module.scss'

export const ContactMap: FC<IContactMap> = ({ mapLink, address, number }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.contacts}>
				<span>{address ? address : ''}</span>
				<Link href={`tel:${number}`} className={styles.tel}>
					{number ? createPhoneNumber(number || '') : ''}
				</Link>
			</div>
			<iframe src={mapLink} className={styles.map}></iframe>
		</div>
	)
}
