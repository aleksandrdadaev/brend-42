'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { useGetContest } from '@/features/get-contest'

import { MainBlockTItle } from '@/entities/main-block-title'

import logo from '@/shared/assets/icons/logo-alt.svg'
import Title from '@/shared/ui/title/Title'

import styles from './MainSection.module.scss'
import Slider from './slider/Slider'

export const MainSection: FC = () => {
	const { isSuccess, title } = useGetContest()
	return (
		<section className={styles.background}>
			<Slider />
			<div className={styles.content}>
				<Title classname={styles.title}>{isSuccess ? title : ''}</Title>

				<div className={styles.right}>
					<motion.div
						className={styles.img}
						animate={{
							filter: [
								'brightness(1.2)',
								'brightness(0.75)',
								'brightness(1.2)',
							],
						}}
						transition={{ repeat: Infinity, duration: 3 }}
					>
						<Image src={logo} alt='' fill />
					</motion.div>
				</div>

				<MainBlockTItle />
			</div>
		</section>
	)
}
