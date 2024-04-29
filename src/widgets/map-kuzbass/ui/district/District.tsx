'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { IDistrict } from '@/shared/model/types/district.type'

import { districtsConfig } from '../../config/districts.config'
import { IMapProps } from '../../model/types/map-props.type'

import styles from './District.module.scss'

const District: FC<{ district: IDistrict | undefined; props: IMapProps }> = ({
	district,
	props,
}) => {
	const path = districtsConfig.find(
		(item, index) => item.name === district?.name
	)
	const isActive: boolean = district?.name === props.districtName
	return (
		<g>
			<path
				fill={path?.fill}
				d={path?.d}
				className={clsx(styles.path, {
					[styles.active]: isActive,
				})}
				onClick={() => {
					if (isActive) return
					props.setDistrict(path?.name || '')
					props.setDistrictId(district?._id || '')
				}}
			/>
		</g>
	)
}

export default District
