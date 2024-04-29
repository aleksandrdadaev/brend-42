import { scroller } from 'react-scroll'

export const goToInvitationForm = () =>
	setTimeout(() => {
		scroller.scrollTo('form', {
			smooth: true,
			isDynamic: true,
		})
	}, 250)
