export const changeProgressWidth = (props: any, progress: any): void => {
	const end: number = props.Components.Controller.getEnd() + 1
	progress.current.style.width = String((100 * (props.index + 1)) / end) + '%'
}
