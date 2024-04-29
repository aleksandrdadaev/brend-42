import { IIncorrect } from '../../model/types/incorrect.type'

export const incorrect = ({ reset, setError }: IIncorrect) => {
	reset()
	setError('username', {
		type: 'manual',
		message: 'Неверный логин или пароль',
	})
	setError('password', {
		type: 'manual',
		message: 'Неверный логин или пароль',
	})
}
