import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './AboutCompetitionBlock.module.scss'
import Info from './info/Info'
import Organizers from './organizers/Organizers'

export const AboutCompetitionBlock: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle classname='text-blue'>О конкурсе</SubTitle>
			<div className={styles.right}>
				<Info />
				<Organizers />
			</div>
		</section>
	)
}
