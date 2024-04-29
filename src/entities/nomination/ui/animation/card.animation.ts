import { Variants } from 'framer-motion'

const perspective: number = 600

export const cardAnimation: Variants = {
	hidden: {
		height: 175,
	},
	show: {
		height: 175,
		transition: {
			duration: 0.3,
			when: 'afterChildren',
		},
	},
	hover: {
		height: 370,
		transition: {
			duration: 0.3,
			delayChildren: 0.1,
			when: 'beforeChildren',
		},
	},
}

export const cardAnimationTablet: Variants = {
	hidden: {
		height: 111,
	},
	show: {
		height: 111,
		transition: {
			duration: 0.3,
			when: 'afterChildren',
		},
	},
	hover: {
		height: 330,
		transition: {
			duration: 0.3,
			delayChildren: 0.1,
			when: 'beforeChildren',
		},
	},
}

export const frontAnimation: Variants = {
	hidden: {
		transformPerspective: perspective,
		rotateY: 0,
	},
	show: {
		rotateY: 0,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		rotateY: -180,
		transition: {
			duration: 0.5,
		},
	},
}

export const backAnimation: Variants = {
	hidden: {
		transformPerspective: perspective,
		rotateY: 180,
	},
	show: {
		rotateY: 180,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		rotateY: 0,
		transition: {
			duration: 0.5,
		},
	},
}
