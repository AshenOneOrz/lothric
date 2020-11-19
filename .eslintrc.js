module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['plugin:vue/recommended'],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'brace-style': [2, '1tbs'],
		// 双峰驼命名格式
		camelcase: [0, 'always'],
		'comma-dangle': [0, 'always'],
		// 使用 === 替代 == allow-null允许null和undefined==
		eqeqeq: [2, 'allow-null'],
	},
}
