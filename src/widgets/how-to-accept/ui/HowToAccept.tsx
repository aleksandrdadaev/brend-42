'use client'

import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './HowToAccept.module.scss'
import List from './list/List'

export const HowToAccept: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.section}>
			<SubTitle classname='text-orange' animate={!manage}>
				Как принять участие
			</SubTitle>
			<List />
		</section>
	)
}
