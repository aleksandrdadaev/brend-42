import { SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'

import styles from './Slide.module.scss'

const Slide: FC<{ image: string }> = ({ image }) => {
	return (
		<SplideSlide>
			<div className={styles.img}>
				<Image src={getImageUrl(image)} alt='' fill />
			</div>
		</SplideSlide>
	)
}

export default Slide
