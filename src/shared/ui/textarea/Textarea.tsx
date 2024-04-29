import { LegacyRef, forwardRef } from 'react'

import { ITextarea } from '@/shared/model/types/form.type'

import styles from './Textarea.module.scss'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	(
		{ label, error, rows = 10, ...rest },
		forwardRef: LegacyRef<HTMLTextAreaElement> | undefined
	) => {
		return (
			<label className={styles.label}>
				<span>{label}</span>
				<textarea ref={forwardRef} rows={rows} {...rest} />
				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)

export default Textarea
