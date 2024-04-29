import { ToastOptions, toast } from 'react-toastify'

const options: ToastOptions<unknown> | undefined = {
	autoClose: 3000,
	closeOnClick: true,
}

export const notificationSuccess = (text: string) =>
	toast.success(text, {
		...options,
	})

export const notificationError = (text: string) =>
	toast.error(text, {
		...options,
	})
