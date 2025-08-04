<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(options) {
			// 获取从上一个页面传递过来的URL参数
			if (options.url) {
				this.url = decodeURIComponent(options.url);
			}
		}
	}
</script>

<style>
</style>
