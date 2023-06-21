import axios from 'axios';
import { API_URL } from '@constants/index';

export default axios.create({
	baseURL: API_URL,
});
