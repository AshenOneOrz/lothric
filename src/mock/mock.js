import Mock from 'mockjs'

import pictures from './picture'
Mock.mock('/api/picture/list', 'get', (req) => {
	return {
		code: 200,
		msg: '获取照片列表成功',
		data: pictures,
	}
})
