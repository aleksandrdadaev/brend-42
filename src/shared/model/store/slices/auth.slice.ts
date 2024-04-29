import { createSlice } from '@reduxjs/toolkit'

const initialState: { isAuth: boolean } = {
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: state => {
			state.isAuth = true
		},
		logout: state => {
			state.isAuth = false
		},
	},
})

export const authActions = authSlice.actions

export default authSlice.reducer
