<template>
	<div class="header-container">
		<div class="logo-wrapper">
			<a id="home-link" href="">Lothric</a>
		</div>
		<div class="navgation">
			<nav>
				<a href="">About</a>
				<a href="">Contact</a>
				<a href="">Console</a>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style scoped>
.header-container {
	position: sticky;
	top: 0px;
	height: 8vh;
	border-bottom: 1px solid #eee;
	box-shadow: 0 0 5px #eeeeee;
	padding: 0px 40px;
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	letter-spacing: 1px;
	background-color: rgba(255, 255, 255, 0.9);
}

.logo-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

#home-link {
	color: #2c3e50;
	font-size: 20px;
}

nav {
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
a {
	color: #999999;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;
	border-bottom: 1px solid inherit;
	padding: 5px;
	position: relative;
}

a:hover {
	color: #000;
	border-bottom: 1px solid #000;
}

a:link {
	text-decoration: none;
}
</style>
