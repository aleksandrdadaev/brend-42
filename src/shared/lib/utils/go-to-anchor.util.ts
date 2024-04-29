import { scroller } from 'react-scroll'

export const goToAnchor = (anchor: string | undefined, offset?: number) =>
	setTimeout(() => {
		scroller.scrollTo(anchor || '', {
			smooth: true,
			isDynamic: true,
			offset: offset || 0,
		})
	}, 250)
