import { Splide } from '@splidejs/react-splide'
import { forwardRef } from 'react'

import styles from './Slider.module.scss'
import Slide from './slide/Slide'

const Slider = forwardRef<Splide, { images: string[] }>(
	({ images }, forwardRef: any) => {
		return (
			<Splide
				className={styles.slider}
				ref={slider => (forwardRef.current = slider)}
				options={{
					perPage: 1,
					speed: 500,
					arrows: true,
					pagination: false,
					type: 'fade',
					rewind: true,
				}}
			>
				{images.map((image, index) => (
					<Slide image={image} key={index} />
				))}
			</Splide>
		)
	}
)

export default Slider
