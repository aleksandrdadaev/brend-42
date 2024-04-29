import { Variants } from 'framer-motion'

export const titleVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
		},
	},
}
