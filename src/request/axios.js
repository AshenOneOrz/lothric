import Axios from 'axios'

// 创建 axios 实例
const axios = Axios.create({
	baseURL: '',
	timeout: 5000,
})

export default axios
