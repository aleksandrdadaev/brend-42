const switchCase = (
	lastNumber: string,
	one: string,
	two: string,
	five: string
): string => {
	switch (lastNumber) {
		case '1':
			return one
		case '2':
		case '3':
		case '4':
			return two
		default:
			return five
	}
}

export const endOfQuantity = (
	text: string,
	value: number,
	one: string,
	two: string,
	five: string
): string => {
	const lastNumber = String(value).at(-1)
	const lastTwoNumber = String(value).at(-2)
	const ending = switchCase(lastNumber ? lastNumber : '0', one, two, five)
	return text + (lastTwoNumber === '1' ? five : ending)
}
