import { Variants } from 'framer-motion'

export const mainTitleVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
}

export const spanVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -400,
	},
	show: {
		opacity: 1,
		y: 0,
	},
}
