import Link from 'next/link'
import { FC } from 'react'

import whatsappIcon from '@/shared/assets/icons/contacts/whatsapp.svg'
import ContactIcon from '@/shared/ui/contact-icon/ContactIcon'

import { IGeneral } from '../../model/types/general.type'

import styles from './General.module.scss'

const General: FC<IGeneral> = ({ email, whatsappLink }) => {
	return (
		<div className={styles.wrapper}>
			<Link href={`mailto:${email}`} className={styles.email}>
				{email}
			</Link>
			<ContactIcon
				icon={whatsappIcon}
				link={whatsappLink}
				text=''
				className={styles.icon}
			/>
		</div>
	)
}

export default General
