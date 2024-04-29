import { Dispatch, SetStateAction, createContext } from 'react'

interface IId {
	_id: string
}

export const IdContext = createContext<string>('')

export const ManageContext = createContext<boolean>(false)

export const CreateSetListContext = <T extends IId>() =>
	createContext<Dispatch<SetStateAction<T[]>> | Function>(() => {})
