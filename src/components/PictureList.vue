<template>
	<div class="picture-list">
		<div class="vertical-img-wrapper">
			<VerticalPictureItem
				v-for="item in verticalPictureList"
				:key="item.id"
				:data="item"
			/>
		</div>
		<div class="horizontal-img-wrapper">
			<HorizontalPictureItem
				v-for="item in horizontalPictureList"
				:key="item.id"
				:data="item"
			/>
		</div>
	</div>
</template>

<script>
import API from '../request/API'
import VerticalPictureItem from './VerticalPictureItem'
import HorizontalPictureItem from './HorizontalPictureItem'
export default {
	name: 'PictureList',
	components: {
		VerticalPictureItem,
		HorizontalPictureItem,
	},
	data() {
		return {
			verticalPictureList: [],
			horizontalPictureList: [],
		}
	},
	created() {
		this.getPictureList()
	},
	methods: {
		async getPictureList() {
			const params = {}
			const response = await API.getPictureList(params)
			this.verticalPictureList = response.vertical
			this.horizontalPictureList = response.horizontal
		},
	},
}
</script>

<style>
.picture-list {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.vertical-img-wrapper {
	display: flex;
	justify-content: space-around;
}

.horizontal-img-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
</style>
