import { Splide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { forwardRef, useEffect, useRef } from 'react'

import closeIcon from '@/shared/assets/icons/cross.svg'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'

import styles from './AlbumModal.module.scss'
import { modalVariants, sliderVariants } from './animation/modal-animation'
import Slider from './slider/Slider'
import Thumbs from './thumbs/Thumbs'

const AlbumModal = forwardRef<
	HTMLElement,
	{
		images: string[]
		close: (event: React.MouseEvent<HTMLElement>) => void
	}
>(({ close, images }, forwardRef: any) => {
	const slider1 = useRef<Splide | null>(null)
	const slider2 = useRef<Splide | null>(null)
	useEffect(() => {
		if (slider2.current?.splide) slider1.current?.sync(slider2.current?.splide)
	}, [slider1, slider2])

	return (
		<motion.section
			className={clsx('!m-0', styles.modal)}
			variants={modalVariants}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<motion.div
				className={styles.wrapper}
				ref={forwardRef}
				variants={sliderVariants}
			>
				<button className={styles.close} onClick={close}>
					<ButtonIcon icon={closeIcon} />
				</button>
				<Slider images={images} ref={slider1} />
				<Thumbs images={images} ref={slider2} />
			</motion.div>
		</motion.section>
	)
})

export default AlbumModal
