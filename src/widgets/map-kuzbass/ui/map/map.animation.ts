import { Variants } from 'framer-motion'

export const mapVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,

		transition: {
			duration: 0.3,
		},
	},
}
