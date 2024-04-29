import { getManageUrl } from '@/shared/config/url.config'
import { INavLink } from '@/shared/model/types/nav-link.type'

export const manageNavLinks: INavLink[] = [
	{
		text: 'Обложка',
		link: getManageUrl(''),
	},
	{
		text: 'Подвал',
		link: getManageUrl('/footer'),
	},
	{
		text: 'Документы',
		link: getManageUrl('/documents'),
	},
	{
		text: 'Политика и соглашение',
		link: getManageUrl('/privacy-and-agreement'),
	},
	{
		text: 'Голосование',
		link: getManageUrl('/voting'),
	},
	{
		text: 'Контакты',
		link: getManageUrl('/contacts'),
	},
	{
		text: 'О конкурсе',
		link: getManageUrl('/about-competition'),
	},
	{
		text: 'Цель конкурса',
		link: getManageUrl('/purpose-competition'),
	},
	{
		text: 'Условия участия',
		link: getManageUrl('/condition'),
	},
	{
		text: 'Как принять участие',
		link: getManageUrl('/how-to-accept'),
	},
	{
		text: 'Номинации',
		link: getManageUrl('/nominations'),
	},
	{
		text: 'Календарь',
		link: getManageUrl('/calendar'),
	},
	{
		text: 'Победители',
		link: getManageUrl('/winners'),
	},
	{
		text: 'Партнеры',
		link: getManageUrl('/partners'),
	},
	{
		text: 'Участники',
		link: getManageUrl('/participants'),
	},
	{
		text: 'Новости',
		link: getManageUrl('/news'),
	},
	{
		text: 'Фото',
		link: getManageUrl('/photos'),
	},
	{
		text: 'Видео',
		link: getManageUrl('/videos'),
	},
]
