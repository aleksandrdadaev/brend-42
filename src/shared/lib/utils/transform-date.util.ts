export const transformIsoToString = (iso: string) => {
	const array = iso.slice(0, 10).split('-')
	return `${array[2]} ${switchMonth(Number(array[1]))}, ${array[0]}`
}

const switchMonth = (month: number): string => {
	switch (month) {
		case 1:
			return 'января'
		case 2:
			return 'февраля'
		case 3:
			return 'марта'
		case 4:
			return 'апреля'
		case 5:
			return 'мая'
		case 6:
			return 'июня'
		case 7:
			return 'июля'
		case 8:
			return 'августа'
		case 9:
			return 'сентября'
		case 10:
			return 'октября'
		case 11:
			return 'ноября'
		case 12:
			return 'декабря'
		default:
			return ''
	}
}

export const transformIsoToStringClassic = (iso: string) => {
	// const array = iso.slice(0, 10).split('-')
	// return `${array[2]}.${array[1]}.${array[0]}`
	return iso.slice(0, 10)
}

export const transformStringDateToIso = (date: string) =>
	new Date(date).toISOString()
