import axios from 'axios';
import url from '../config/url';

const api = axios.create({
	baseURL: url.URL_API,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export default api;