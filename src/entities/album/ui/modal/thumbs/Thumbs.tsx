import { Splide, SplideTrack } from '@splidejs/react-splide'
import clsx from 'clsx'
import { forwardRef, useRef } from 'react'

import { changeProgressWidth } from '@/entities/album/lib/utils/change-progress-width.util'

import styles from './Thumbs.module.scss'
import Progress from './progress/Progress'
import Thumb from './thumb/Thumb'

const Thumbs = forwardRef<Splide, { images: string[] }>(
	({ images }, forwardRef: any) => {
		const progress = useRef<any>(null)
		return (
			<Splide
				className={styles.thumbs}
				ref={slider => (forwardRef.current = slider)}
				options={{
					fixedWidth: 160,
					arrows: false,
					speed: 500,
					padding: 10,
					pagination: false,
					rewind: true,
					gap: 10,
					focus: 'center',
					drag: false,
					isNavigation: true,
				}}
				onMove={props => changeProgressWidth(props, progress)}
				onMounted={props => changeProgressWidth(props, progress)}
				hasTrack={false}
			>
				<SplideTrack>
					{images.map((image, index) => (
						<Thumb image={image} key={index} />
					))}
				</SplideTrack>

				<Progress ref={progress} />
			</Splide>
		)
	}
)

export default Thumbs
