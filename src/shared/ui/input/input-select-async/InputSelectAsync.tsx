import { FC, forwardRef } from 'react'
import { GroupBase, Props } from 'react-select'
import AsyncSelect from 'react-select/async'
import type {} from 'react-select/base'

import { IInput } from '@/shared/model/types/form.type'

import styles2 from '../Input.module.scss'

import './InputSelectAsync.scss'

declare module 'react-select/base' {
	export interface Props<
		Option,
		IsMulti extends boolean,
		Group extends GroupBase<Option>,
	> extends IInput {}
}

const InputSelectAsync = forwardRef(function InputSelectAsync<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>({ label, error, ...rest }: Props<Option, IsMulti, Group>, forwardRef: any) {
	return (
		<label className={styles2.label}>
			<span>{label}</span>
			<AsyncSelect
				label={label}
				ref={forwardRef}
				cacheOptions
				loadingMessage={value => 'Загрузка'}
				noOptionsMessage={value => 'Ничего не найдено'}
				classNamePrefix={'custom-select'}
				{...rest}
			/>
			{error && <span className={styles2.error}>{error.message}</span>}
		</label>
	)
})

export default InputSelectAsync
