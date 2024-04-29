import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface IInputProps {
	label: string
	error?: FieldError | undefined
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps
type TypeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IInputProps

export interface IInput extends TypeInputProps {}

export interface ITextarea extends TypeTextareaProps {}

export interface IFileForm {
	file: FileList
}

export interface ITextForm {
	newText: string
}
