import { Variants } from 'framer-motion'

export const newsImgVariants: Variants = {
	hidden: {
		height: 0,
	},
	show: {
		transition: {
			delay: 0.3,
		},
		height: 'auto',
	},
}

export const imgSpanVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		transition: {
			delay: 0.5,
		},
		opacity: 1,
	},
}
