import { Dispatch, SetStateAction } from 'react'

export interface IOpenButton {
	state: boolean
	setState: Dispatch<SetStateAction<boolean>>
}
