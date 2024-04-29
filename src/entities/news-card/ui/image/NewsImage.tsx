'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { INews } from '@/shared/model/types/news.type'

import {
	imgSpanVariants,
	newsImgVariants,
} from '../animation/img-news-animation'

import styles from './NewsImage.module.scss'

const NewsImage: FC<Pick<INews, 'photoPath' | 'photoCaption'>> = ({
	photoCaption,
	photoPath,
}) => {
	return (
		<motion.div
			className={styles.imgWrapper}
			variants={newsImgVariants}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<div className={styles.img}>
				<Image src={getImageUrl(photoPath)} alt={photoCaption} fill />
			</div>
			<motion.span
				className={styles.caption}
				variants={imgSpanVariants}
				initial='hidden'
				animate='show'
				exit='hidden'
			>
				{photoCaption}
			</motion.span>
		</motion.div>
	)
}

export default NewsImage
