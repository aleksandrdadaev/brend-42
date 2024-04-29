export const createPhoneNumber = (phoneNumber: string): string =>
	`${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(
		5,
		8
	)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
