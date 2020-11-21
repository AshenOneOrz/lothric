<template>
	<div
		class="item-wrapper"
		@mouseover="onMouseOverEvent"
		@mouseleave="onMouseLeaveEvent"
	>
		<router-link :to="`/picture/` + data.id">
			<img :src="data.pictureUrl" />
			<div :class="{ show: isShow }" class="picture-mask">
				<p class="link-detail">
					Detail
					<svg
						t="1605959286326"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="6617"
					>
						<path
							d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"
							p-id="6618"
							fill="#e6e6e6"
						></path>
					</svg>
				</p>
			</div>
		</router-link>
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
	width: 33.2%;
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

.item-wrapper:hover .link-detail {
	opacity: 1;
}

.link-detail {
	position: absolute;
	bottom: 0;
	transition: 0.4s all ease-in;
	opacity: 1;
	display: flex;
	align-items: center;
}
svg {
	width: 20px;
}
</style>
