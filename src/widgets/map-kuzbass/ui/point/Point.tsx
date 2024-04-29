import Image from 'next/image'
import { FC } from 'react'

import geoPoint from '@/shared/assets/icons/map/geo-point.svg'

import styles from './Point.module.scss'

const Point: FC<{ text: string }> = ({ text }) => {
	return (
		<span className={styles.point}>
			<div className={styles.img}>
				<Image src={geoPoint} alt='' fill />
			</div>
			{text}
		</span>
	)
}

export default Point
