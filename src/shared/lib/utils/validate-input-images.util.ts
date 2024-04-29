export const validateInputImages = (value: FileList) => {
	const isValid = !Array.from(value).find(
		file => file.type !== 'image/png' && file.type !== 'image/jpeg'
	)

	return isValid || 'Картинка должна быть форматом png/jpg/jpeg'
}
