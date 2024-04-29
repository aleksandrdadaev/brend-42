import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import greenDot from '@/shared/assets/icons/map/green-dot.svg'
import redDot from '@/shared/assets/icons/map/red-dot.svg'

import styles from './Dot.module.scss'

const Dot: FC<{ text?: string; vertical?: boolean; classname?: string }> = ({
	text,
	vertical,
	classname,
}) => {
	return (
		<span
			className={clsx(styles.wrapper, classname, {
				[styles.vertical]: vertical,
			})}
		>
			<Image
				src={text ? redDot : greenDot}
				alt=''
				width={14}
				height={14}
				className={styles.dot}
			/>
			{text && text}
		</span>
	)
}

export default Dot
