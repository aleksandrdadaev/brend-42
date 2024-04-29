import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { ISignInForm } from '@/shared/model/types/auth.type'

export interface IIncorrect {
	setError: UseFormSetError<ISignInForm>
	reset: UseFormReset<ISignInForm>
}
