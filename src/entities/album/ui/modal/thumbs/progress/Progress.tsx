import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Progress.module.scss'

const Progress = forwardRef<HTMLElement>(({}, forwardRef: any) => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx('splide__progress', styles.progress)}>
				<div
					ref={forwardRef}
					className={clsx('splide__progress__bar', styles.bar)}
				/>
			</div>
		</div>
	)
})
export default Progress
