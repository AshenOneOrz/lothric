<template>
	<div
		class="item-wrapper"
		@mouseover="onMouseOverEvent"
		@mouseleave="onMouseLeaveEvent"
	>
		<img :src="data.pictureUrl" />
		<div :class="{ show: isShow }" class="picture-mask"></div>
	</div>
</template>

<script>
export default {
	name: 'VerticalPictureItem',
	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			isShow: true,
		}
	},
	created() {
		console.log(this.data)
	},
	methods: {
		onMouseOverEvent() {
			// this.isShow = true
		},
		onMouseLeaveEvent() {
			// this.isShow = false
		},
	},
}
</script>

<style scoped>
.item-wrapper {
	width: 50%;
	position: relative;
}
img {
	width: 100%;
}

.picture-mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: 0.2s all ease-out;
	background-color: rgba(255, 255, 255, 0.1);
	opacity: 1;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

.show {
	opacity: 1 !important;
}
</style>
