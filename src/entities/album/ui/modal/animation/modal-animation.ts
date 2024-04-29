import { Variants } from 'framer-motion'

export const modalVariants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delayChildren: 0.3,
		},
	},
}

export const sliderVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.3,
		},
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
}
