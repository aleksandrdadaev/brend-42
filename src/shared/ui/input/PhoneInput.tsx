import { InputMask } from '@react-input/mask'
import { LegacyRef, Ref, forwardRef } from 'react'

import { phoneInputMask } from '@/shared/lib/utils/phone-input.util'
import { IInput } from '@/shared/model/types/form.type'

import styles from './Input.module.scss'

const PhoneInput = forwardRef<HTMLInputElement, IInput>(
	(
		{ label, error, ...rest },
		forwardRef: Ref<HTMLInputElement> | undefined
	) => {
		return (
			<label className={styles.label}>
				<span>{label}</span>
				<InputMask
					mask={phoneInputMask}
					showMask
					replacement={{ _: /\d/ }}
					ref={forwardRef}
					placeholder={phoneInputMask}
					{...rest}
				/>

				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default PhoneInput
