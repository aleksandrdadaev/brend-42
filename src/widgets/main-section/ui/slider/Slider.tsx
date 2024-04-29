'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { FC } from 'react'

import { useGetCover } from '@/features/get-cover'

import Slide from '../slide/Slide'

import styles from './Slider.module.scss'

const Slider: FC = () => {
	const { cover, isLoading, isSuccess } = useGetCover()
	return isLoading ? (
		<></>
	) : (
		<Splide
			className={styles.slider}
			options={{
				arrows: false,
				pagination: false,
				type: 'fade',
				rewind: true,
				speed: 1000,
				autoplay: true,
				interval: 5000,
				drag: false,
				pauseOnHover: false,
			}}
		>
			{cover?.photosPath.map((img, index) => (
				<SplideSlide key={index}>
					<Slide image={img} />
				</SplideSlide>
			))}
		</Splide>
	)
}

export default Slider
