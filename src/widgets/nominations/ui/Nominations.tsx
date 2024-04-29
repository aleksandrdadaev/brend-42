'use client'

import { FC, useContext } from 'react'
import { Element } from 'react-scroll'

import { ManageContext } from '@/shared/lib/utils/context.util'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Nominations.module.scss'
import List from './list/List'

export const Nominations: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.wrapper}>
			<SubTitle classname='text-primary' animate={!manage}>
				Номинации
			</SubTitle>
			<Element name='nominations' className='w-full'>
				<List />
			</Element>
		</section>
	)
}
