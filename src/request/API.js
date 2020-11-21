import httpRequest from './request'

const getPictureList = (params) => {
	const response = httpRequest('get', '/api/picture/list', params, {})
	return response
}

const API = {
	getPictureList,
}
export default API
