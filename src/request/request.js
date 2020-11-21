import Axios from 'axios'

const httpRequest = (method, url, params, options = {}) => {
	return new Promise((resolve, reject) => {
		let requestParams = {
			method,
			url,
			data: params,
			baseUrl: options.baseUrl || Axios.defaults.baseUrl,
		}
		Object.assign(requestParams, options)
		Axios(requestParams).then(
			(response) => {
				const data = response.data
				let code = data.code
				if (code !== 200) {
					console.error(data.msg)
				}
				resolve(data.data)
			},
			(err) => {
				console.log('requestOnError')
				reject(err)
			},
		)
	})
}

export default httpRequest
