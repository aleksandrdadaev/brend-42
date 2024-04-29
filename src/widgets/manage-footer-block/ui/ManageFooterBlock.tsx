'use client'

import Image from 'next/image'
import { FC } from 'react'

import { useGetFooter } from '@/features/get-footer'

import { getImageUrl } from '@/shared/config/api.config'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ManageFooterBlock.module.scss'

export const ManageFooterBlock: FC = () => {
	const { footer, isSuccess } = useGetFooter()
	return (
		<section>
			<SubTitle animate={false}>Фото в подвале</SubTitle>
			<div className={styles.img}>
				{isSuccess && (
					<Image src={getImageUrl(footer?.photoPath || '')} alt='' fill />
				)}
			</div>
		</section>
	)
}
