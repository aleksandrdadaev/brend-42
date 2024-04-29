'use client'

import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './News.module.scss'
import List from './list/List'

export const News: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={!manage}>Новости</SubTitle>
			<List />
		</section>
	)
}
