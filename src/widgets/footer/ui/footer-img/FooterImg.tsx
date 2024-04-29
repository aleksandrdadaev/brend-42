'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { useGetFooter } from '@/features/get-footer'

import { getImageUrl } from '@/shared/config/api.config'

import styles from './FooterImg.module.scss'

const FooterImg: FC = () => {
	const { footer, isError, isLoading, isSuccess } = useGetFooter()
	return (
		<div
			className={clsx(styles.img, {
				[styles.gradient]: isLoading,
			})}
		>
			{isSuccess && (
				<Image src={getImageUrl(footer?.photoPath || '')} alt='' fill />
			)}
		</div>
	)
}

export default FooterImg
