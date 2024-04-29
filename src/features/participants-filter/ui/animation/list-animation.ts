import { Variants } from 'framer-motion'

export const listVariants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.15,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.15,
		},
	},
}
