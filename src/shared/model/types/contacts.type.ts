export interface IContacts {
	_id: string
	address: string[]
	number: string[]
	email: string
	whatsappLink: string
	whatsappNumber: string
}

export interface IContactsForm
	extends Omit<IContacts, '_id' | 'address' | 'number'> {
	firstAddress: string
	secondAddress: string
	firstNumber: string
	secondNumber: string
}

export interface IContactsResponse {
	data: IContacts
	statusCode: number
}
