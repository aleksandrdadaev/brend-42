export const phoneInputMask: string = '+_ (___) ___-__-__'

const regexPhone = /\+|\_|\-|\(|\)|\s/g

export const phoneRequired = (value: string) =>
	value.replace(regexPhone, '').length > 0 || 'Введите телефон'

export const phoneIsValid = (value: string) =>
	value.replace(regexPhone, '').length === 11 ||
	'Введите корректный номер телефона'

export const replacePhone = (value: string): string =>
	value.replace(/\-|\(|\)|\s/g, '')
