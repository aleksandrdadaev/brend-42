'use client'

import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './PurposeCompetition.module.scss'
import Purpose from './purpose/Purpose'

export const PurposeCompetition: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.wrapper}>
			<SubTitle classname='text-orange' animate={!manage}>
				Цель конкурса
			</SubTitle>
			<Purpose />
		</section>
	)
}
