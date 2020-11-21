<template>
	<div class="page-container">
		<h1>Hello AshenOne</h1>
	</div>
</template>

<script>
import API from '../request/API'
export default {
	name: 'Home',

	data() {
		return {
			pictureList: [],
		}
	},
	created() {
		this.getPictureList()
	},
	methods: {
		async getPictureList() {
			const params = {}
			const response = await API.getPictureList(params)
			this.pictureList = response
		},
	},
}
</script>

<style></style>
