import { FC } from 'react'

import { Calendar } from '@/widgets/calendar'
import { ManageCalendarButtons } from '@/widgets/manage-calendar-buttons'

import styles from './ManageCalendar.module.scss'

export const ManageCalendar: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Calendar manage />
			<ManageCalendarButtons />
		</main>
	)
}
