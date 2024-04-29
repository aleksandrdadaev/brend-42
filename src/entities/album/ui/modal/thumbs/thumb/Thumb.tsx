import { SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'

import styles from './Thumb.module.scss'
import './thumb.scss'

const Thumb: FC<{ image: string }> = ({ image }) => {
	return (
		<SplideSlide className={clsx('!border-none', styles.thumb)}>
			<div className={styles.img}>
				<Image src={getImageUrl(image)} alt='' fill />
			</div>
		</SplideSlide>
	)
}

export default Thumb
