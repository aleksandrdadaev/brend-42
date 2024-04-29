export interface IShowMoreButton {
	clickHandler: (event: React.MouseEvent<HTMLElement>) => void
	isLoading: boolean
	text: string
}
