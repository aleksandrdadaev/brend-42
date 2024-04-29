'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { firstPath } from '../../config/districts.config'
import { IMapProps } from '../../model/types/map-props.type'
import BgMap from '../bg-map/BgMap'
import District from '../district/District'
import Dots from '../dots/Dots'

import styles from './Map.module.scss'
import { mapVariants } from './map.animation'

const Map: FC<{ props: IMapProps }> = ({ props }) => {
	return (
		<div className={styles.wrapper}>
			<BgMap />
			{props.isLoading && (
				<span className={styles.loading}>Карта загружается</span>
			)}
			{props.isSuccess && (
				<motion.div
					className={styles.map}
					variants={mapVariants}
					initial='hidden'
					animate='show'
				>
					<Dots district={props.districtName} />
					<svg viewBox='0 0 269 445' className={styles.svg}>
						<g className={styles.firstPath}>
							<path
								fill={firstPath.fill}
								d={firstPath.d}
								className={styles.firstPath}
							/>
						</g>
						{props.districts?.map(district => (
							<District district={district} key={district._id} props={props} />
						))}
					</svg>
				</motion.div>
			)}
		</div>
	)
}

export default Map
