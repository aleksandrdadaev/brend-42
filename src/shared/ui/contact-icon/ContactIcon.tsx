import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IContactIcon } from '@/shared/model/types/contact-icon.type'

import styles from './ContactIcon.module.scss'

interface IContactIconComponent extends IContactIcon {
	className?: string
}

const ContactIcon: FC<IContactIconComponent> = ({
	icon,
	link,
	text,
	className,
}) => {
	return (
		<Link href={link} target='_blank'>
			<Image
				src={icon}
				alt={text}
				width={24}
				height={24}
				className={clsx(styles.icon, className)}
			/>
		</Link>
	)
}

export default ContactIcon
