import clsx from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({
	count = 1,
	containerClassName,
	className,
	baseColor = '#E6E6E6',
	highlightColor = '#CCCCCC',
	inline,
	height,
	width,
}) => {
	return (
		<Skeleton
			baseColor={baseColor}
			highlightColor={highlightColor}
			count={count}
			className={clsx('!z-0', className)}
			containerClassName={containerClassName}
			inline
			height={height}
			width={width}
		/>
	)
}

export default SkeletonLoader
