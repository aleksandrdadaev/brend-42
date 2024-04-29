import axios from 'axios'

import { API_URL } from '../config/api.config'
import { getToken } from '../lib/utils/cookie.util'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${getToken()}`

	return config
})
