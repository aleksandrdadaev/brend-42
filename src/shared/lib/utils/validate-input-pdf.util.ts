export const validateInputPdf = (value: FileList | undefined) => {
	const isValid =
		(value?.length && value[0].type === 'application/pdf') ||
		value?.length === 0
	return isValid || 'Файл должен быть в формате pdf'
}
