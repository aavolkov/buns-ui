import * as log from 'loglevel';
import instance from './axiosInstance';

const SUBSCRIBER_PATH = '/subscribers';

const SubscribersApi = {
	name: 'SubscribersApi',
	async getAll() {
		return instance
			.get(`${SUBSCRIBER_PATH}`, {
				auth: {
					username: 'admin',
					password: 'admin'
				}})
			.then(response => {
				log.info(`All Lines`, response);
				return response.data;
			})
			.catch([]);
	},

	async getStatistic() {
		return instance
			.get(`${SUBSCRIBER_PATH}/stat`)
			.then(response => {
				return response.data;
			})
			.catch([]);
	},

};

export default SubscribersApi;
