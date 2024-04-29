import clsx from 'clsx'
import { FC } from 'react'

import SkeletonLoader from '../skeleton-loader/SkeletonLoader'

import styles from './LoaderIcon.module.scss'

const LoaderIcon: FC<{
	width?: number
	height?: number
	classname?: string
}> = ({ classname = '', height = 28, width = 28 }) => {
	return (
		<SkeletonLoader
			width={width}
			height={height}
			className={clsx('!rounded-circle', classname)}
		/>
	)
}

export default LoaderIcon
