import { Variants } from 'framer-motion'
import { white } from 'tailwindcss/colors'

import { blue, orange } from '@/shared/config/colors.config'

export const participateVariants: Variants = {
	hidden: {},
	show: {},
	hover: {
		backgroundColor: `${orange}`,
	},
}

export const positionVariants: Variants = {
	hidden: {},
	show: {},
	hover: {
		top: -15,
		backgroundColor: '#6BA9DE',
		color: '#fff',
	},
}
