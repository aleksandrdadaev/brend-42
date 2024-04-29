import clsx from 'clsx'
import { LegacyRef, forwardRef } from 'react'

import { IInput } from '@/shared/model/types/form.type'

import styles from './Checkbox.module.scss'

const Checkbox = forwardRef<HTMLInputElement, IInput>(
	(
		{ label, type = 'checkbox', checked, onChange, ...rest },
		forwardRef: LegacyRef<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.wrapper}>
				<input
					ref={forwardRef}
					type={type}
					checked={checked}
					className={clsx(styles.checkbox, {
						[styles.checked]: checked,
					})}
					onChange={onChange}
					{...rest}
				/>
				<span>{label}</span>
			</label>
		)
	}
)
export default Checkbox
