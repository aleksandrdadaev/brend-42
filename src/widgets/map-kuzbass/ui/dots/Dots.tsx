import { FC } from 'react'

import Dot from '../dot/Dot'
import Point from '../point/Point'

import styles from './Dots.module.scss'

const Dots: FC<{ district: string }> = ({ district }) => {
	return (
		<div className={styles.dots}>
			<Point text='Кемерово' />
			<Point text='Новокузнецк' />
			<Dot text='Анжеро-Судженск' />
			<Dot text='Березовский' />
			<Dot text='Калтан' />
			<Dot text='Киселевск' />
			<Dot text='Осинники' />
			<Dot text='Мыски' />
			<Dot text='Полысаево' />
			<Dot text='Таштагол' />
			<Dot text='Юрга' />
			<Dot text='Мариинск' />
			<Dot text='Белово' />
			<Dot text='Гурьевск' />
			<Dot text='Ленинск-Кузнецкий' />
			<Dot text='Прокопьевск' />
			<Dot text='Междуреченск' vertical />
			{district === 'Яшкинский' && (
				<>
					<Dot classname={styles.taiga} text='Тайга' />
					<Dot classname={styles.yashkino} text='Яшкино' />
				</>
			)}
			{district === 'Яйский' && <Dot classname={styles.yaya} text='Яя' />}
			{district === 'Ижморский' && (
				<Dot classname={styles.izhmorskij} text='Ижморский' />
			)}
			{district === 'Крапивинский' && (
				<Dot classname={styles.krapivinskij} text='Крапивинский' />
			)}
			{district === 'Промышленновский' && (
				<Dot classname={styles.promyshlennaya} text='Промышленная' />
			)}
			{district === 'Тисульский' && (
				<Dot classname={styles.tisul} text='Тисуль' />
			)}
			{district === 'Топкинский' && (
				<Dot classname={styles.topki} text='Топки' />
			)}
			{district === 'Тяжинский' && (
				<Dot classname={styles.tyazhinskij} text='Тяжинский' />
			)}
			{district === 'Чебулинский' && (
				<Dot classname={styles.chebulinskij} text='Верх-Чебула' />
			)}
		</div>
	)
}

export default Dots
