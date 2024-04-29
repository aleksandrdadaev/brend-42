'use client'

import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './WinnersBlock.module.scss'
import List from './list/List'

export const WinnersBlock: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={!manage}>Каталог участников</SubTitle>
			<List />
		</section>
	)
}
