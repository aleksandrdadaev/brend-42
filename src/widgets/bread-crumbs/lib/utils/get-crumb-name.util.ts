export const getCrumbName = (route: string, dynamicName?: string): string => {
	switch (route) {
		case 'policy':
			return 'Политика'
		case 'user-agreement':
			return 'Пользовательское соглашение'
		case 'contacts':
			return 'Контакты'
		case 'partners':
			return 'Партнеры'
		case 'winners':
			return 'Победители'
		case 'participants':
			return 'Участникам'
		case 'press-center':
			return 'Пресс-центр'
		case 'voting':
			return 'Голосование'
		case 'about-competition':
			return 'О конкурсе'
		default:
			return dynamicName || ''
	}
}
