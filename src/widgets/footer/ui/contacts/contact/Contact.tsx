import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IContact } from '../../../model/types/contact.type'

import styles from './Contact.module.scss'

const Contact: FC<IContact> = ({ icon, link, text, blanc }) => {
	return (
		<Link
			href={link}
			target={blanc ? '_blank' : '_self'}
			className={styles.wrapper}
		>
			<Image src={icon} alt='' width={24} height={24} className={styles.icon} />
			<span className={styles.text}>{text}</span>
		</Link>
	)
}

export default Contact
