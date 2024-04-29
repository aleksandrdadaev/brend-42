import { LegacyRef, forwardRef } from 'react'

import { IInput } from '@/shared/model/types/form.type'

import styles from './Input.module.scss'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{ label, error, type = 'text', ...rest },
		forwardRef: LegacyRef<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.label}>
				<span>{label}</span>
				<input ref={forwardRef} type={type} {...rest} />
				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default Input
