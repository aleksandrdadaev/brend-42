import { INavLink } from '../model/types/nav-link.type'

import { getImageUrl } from './api.config'

export const footerNavLinks: INavLink[] = [
	{
		text: 'Распоряжение',
		link: getImageUrl('disposal.pdf'),
		blanc: true,
	},
	{
		text: 'Положение',
		link: getImageUrl('polozhenie.pdf'),
		blanc: true,
	},
	{
		text: 'Номинации',
		link: '/participants',
		anchor: 'nominations',
	},
	{
		text: 'Условия',
		link: '/participants',
		anchor: 'terms of participation',
	},
	{
		text: 'Участники',
		link: '/participants',
		anchor: 'participants',
	},
	{
		text: 'Пользовательское соглашение',
		link: '/user-agreement',
	},
	{
		text: 'Политика',
		link: '/policy',
	},
]
