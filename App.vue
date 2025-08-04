<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 在这里定义全局样式 */
	page {
		/* 设置一个更适合移动端阅读的字体系列 */
		/* 优先使用苹果的苹方字体和微软的雅黑字体，然后使用系统默认的无衬线字体 */
		font-family: 'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	}
</style>
