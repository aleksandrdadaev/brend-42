export const isOrange = (isDesktop: boolean, position: number): boolean => {
	return (
		(isDesktop && (position === 1 || position === 6)) ||
		(!isDesktop && (position === 1 || position === 4))
	)
}

export const isBlue = (isDesktop: boolean, position: number): boolean => {
	return (
		(isDesktop && (position === 2 || position === 4)) ||
		(!isDesktop && (position === 2 || position === 5))
	)
}

export const isGreen = (isDesktop: boolean, position: number): boolean => {
	return (
		(isDesktop && (position === 3 || position === 5)) ||
		(!isDesktop && (position === 3 || position === 6))
	)
}
