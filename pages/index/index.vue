<template>
	<view class="container">
		<!-- 页面主体 -->
		<scroll-view scroll-y class="main-content">
			<!-- 顶部 Banner -->
			<view class="banner-container">
				<image class="banner" src="/static/banner.jpeg" mode="aspectFill"></image>
			</view>

			<!-- 主内容区 -->
			<view class="content-padding">
				
				<!-- 关注公众号 -->
				<view class="card follow-card">
				    <!-- 这是我们自定义的、始终可见的UI -->
				    <view class="follow-left">
				        <!-- 请将/static/avatar.png替换为您自己的公众号头像图片 -->
				        <image class="avatar" src="/static/avatar.jpg" />
				        <view class="follow-text">
				            <text class="font-semibold">关注公众号</text>
				            <text class="text-xs text-gray-500">获取更多流量卡资讯</text>
				        </view>
				    </view>
				    <!-- 这是一个假的按钮，只负责显示样式 -->
				    <view class="follow-btn-style">关注</view>
				
				    <!-- #ifdef MP-WEIXIN -->
				    <!-- 在小程序中，添加一个透明的、覆盖整个卡片的点击层 -->
				    <official-account class="official-account-overlay"></official-account>
				    <!-- #endif -->
				</view>

				<!-- 热门标签 -->
				<view class="card section">					<view class="section-header">
						<text class="section-title">热门标签</text>
						<text class="text-sm text-gray-500">更多 ›</text>
					</view>
					<view class="tags-grid">
						<!-- 为每个 tag-item 添加了 @click 事件 -->
						<view class="tag-item" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '爆款推荐')">
							<view class="tag-icon-wrapper bg-red-100">
								<image class="tag-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2VmMTRhNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOCAxNmEyIDIgMCAwIDAgMi0ySDZhMiAyIDAgMCAwIDIgMnpNOCAxLjkxOGwtLjc5Ny4xNjFBMi4wMDIgMi4wMDIgMCAwIDAgNCA2YzAgLjYyOC0uMTM0IDIuMTk3LS40NTkgMy43NDItLjE2Ljc2Ny0uMzc2IDEuNTY2LS42NjMgMi4yNThoMTAuMjQ0Yy0uMjg3LS42OTItLjUwMi0xLjQ5LS42NjMtMi4yNThDMTIuMTM0IDguMTk3IDEyIDYuNjI4IDEyIDZhMi4wMDIgMi4wMDIgMCAwIDAtMy4yMDMtMy45Mkw4IDEuOTE3ek0xNC4yMiAxMmMuMjIzLjQ0Ny40ODEuODAxLjc4IDFI MWMuMjk5LS4xOTkuNTU3LS41NTMuNzgtMUMyLjY4IDEwLjIgMyA2Ljg4IDMgNmMwLTIuNDIgMS43Mi00LjQ0IDQuMDA1LTAuOTAxYTEgMSAwIDEgMSAxLjk5IDBBNTAwMiA1LjAwMiAwIDAgMSAxMyA2YzAgLjg4LjMyIDQuMiAxLjIyIDZ6Ii8+PC9zdmc+" />
							</view>
							<text class="tag-badge">限时</text>
							<text class="tag-text">爆款推荐</text>
						</view>
						<view class="tag-item" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '本地号码')">
							<view class="tag-icon-wrapper bg-blue-100">
								<image class="tag-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzNiODJmNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMTIgMWExIDEgMCAwIDEgMSAxdjEwLjc1NUwxMiAxMSA4IDExcy01IDEuNzU1LTUgMS43NTVWMmExIDEgMCAwIDEgMS0xaDZ6TTQgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkg0eiIvPjxwYXRoIGQ9Ik04IDEwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiLz48L3N2Zz4=" />
							</view>
							<text class="tag-text">本地号码</text>
						</view>
						<view class="tag-item" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '长期套餐')">
							<view class="tag-icon-wrapper bg-yellow-100">
								<image class="tag-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2Q5NzcwMCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOCAxMWEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDYiLz48cGF0aCBkPSJNOCAxYTcgNyAwIDEgMCAwIDE0QTcgNyAwIDAgMCA4IDF6TTAgOGE4IDggMCAxIDEgMTYgMEE4IDggMCAwIDEgMCA4eiIvPjwvc3ZnPg==" />
							</view>
							<text class="tag-text">长期套餐</text>
						</view>
						<view class="tag-item" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '5G高速')">
							<view class="tag-icon-wrapper bg-green-100">
								<image class="tag-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzEwYjY3MSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNTUwMyAzLjUyNEM1LjM3NyAzLjM5OCA1LjE4MiAzLjMzMyA1IDMuMzMzcy0uMzc3LjA2NS0uNTAzLjE5MUwxLjE5IDYuODI4Yy0uMjUuMjUtLjI1LjY1NSAwIC45MDVsMy4zMDcgMy4zMDdjLjI1LjI1LjY1NS4yNS45MDUgMGwzLjMwNy0zLjMwN2MuMjUtLjI1LjI1LjY1NSAwLS45MDVMNS4wMDMgMy41MjR6bS43MDcuNzA3IDIuMTIyIDIuMTIxLTIuMTIyIDIuMTIxLS43MDctLjcwNyAxNDE1LTEuNDE0LTEuNDE1LTEuNDE0ek0xMC41IDMuMzMzYy4xODIgMCAuMzc3LjA2NS41MDMuMTkxbDMuMzA3IDMuMzA3Yy4yNS4yNS4yNS42NTUgMCAuOTA1bC0zLjMwNyAzLjMwN2MtLjI1LjI1LS42NTUuMjUtLjkwNSAwTDUuODkzIDguMDY4Yy0uMjUtLjI1LS4yNS0uNjU1IDAtLjkwNWwzLjMwNy0zLjMwN2MuMTI2LS4xMjYuMzItLjE5MS41MDMtLjE5MXoiLz48L3N2Zz4=" />
							</view>
							<text class="tag-text">5G高速</text>
						</view>
					</view>
				</view>

				<!-- 精选推荐 -->
				<view class="card section">
					<view class="section-header">
						<text class="section-title">精选推荐</text>
						<view class="tabs">
							<text class="tab-item active">移动流量卡</text>
							<text class="tab-item">联通流量卡</text>
							<text class="tab-item">电信流量卡</text>
						</view>
					</view>

					<!-- 套餐卡片 -->
					<view class="plan-card border-blue">
						<view class="plan-card-content">
							<view class="plan-details">
								<text class="plan-title">广电升G卡29元192G</text>
								<view class="plan-tags">
									<text class="plan-tag bg-blue-100 text-blue-700">18-65岁申请</text>
									<text class="plan-tag bg-blue-100 text-blue-700">5年长期套餐</text>
								</view>
							</view>
							<view class="plan-data">
								<text class="data-amount text-blue-600"><text class="data-number">192</text>G</text>
								<text class="data-desc">广电升G卡29元</text>
							</view>
						</view>
						<view class="plan-footer">
							<text class="promo-badge bg-blue-500">首月免月租</text>
							<button class="plan-btn gradient-orange" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '广电升G卡29元192G')">免费办理</button>
						</view>
					</view>

					<view class="plan-card border-indigo">
						<view class="plan-card-content">
							<view class="plan-details">
								<text class="plan-title">电信星卡29元80G</text>
								<view class="plan-tags">
									<text class="plan-tag bg-indigo-100 text-indigo-700">18-60岁申请</text>
									<text class="plan-tag bg-indigo-100 text-indigo-700">5G畅享速率</text>
								</view>
							</view>
							<view class="plan-data">
								<text class="data-amount text-indigo-600"><text class="data-number">80</text>G</text>
								<text class="data-desc">电信星卡29元</text>
							</view>
						</view>
						<view class="plan-footer">
							<text class="promo-badge bg-indigo-500">首月免月租</text>
							<button class="plan-btn gradient-orange" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '电信星卡29元80G')">免费办理</button>
						</view>
					</view>
					
					<view class="plan-card border-red">
						<view class="plan-card-content">
							<view class="plan-details">
								<text class="plan-title">联通鸿鵠卡135G+</text>
								<view class="plan-tags">
									<text class="plan-tag bg-red-100 text-red-700">18-60岁申请</text>
									<text class="plan-tag bg-red-100 text-red-700">全国高速流量</text>
								</view>
							</view>
							<view class="plan-data">
								<text class="data-amount text-red-600"><text class="data-number">135</text>G+</text>
								<text class="data-desc">优先发货省</text>
							</view>
						</view>
						<view class="plan-footer">
							<text class="customer-service">在线客服</text>
							<button class="plan-btn gradient-blue" @click="handleApply('https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw', '联通鸿鵠卡135G+')">立即申请</button>
						</view>
					</view>
					
				</view>
			</view>

			<!-- 免责声明 -->
			<view class="disclaimer">
				<text class="disclaimer-text">详情查看活动细则，最终活动解释权归移动公司所有，本页面只做生活服务信息收集和分享;信息收集自互联网，如有侵权请联系删除；不同设备显示的活动内容可能会存在差异，以活动页面为准；</text>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleApply(url, title = '文章详情') { // 接收标题参数，并给一个默认值
				// #ifdef H5
				window.open(url, '_blank');
				// #endif

				// #ifndef H5
				uni.navigateTo({
					// 将标题也编码后传递给webview页面
					url: '/pages/webview/webview?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title)
				});
				// #endif
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	page {
		background-color: #f7fafc;
	}
	.container {
		background-color: #f7fafc;
		min-height: 100vh;
	}
    .main-content {
       height: 100vh;
    }
	.content-padding {
		padding: 32rpx;
	}
	.card {
		background-color: #ffffff;
		border-radius: 16rpx;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		padding: 24rpx;
	}
	.section {
		margin-top: 32rpx;
	}
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}
	.section-title {
		font-weight: 700;
		font-size: 36rpx;
	}
	.text-sm {
		font-size: 24rpx;
	}
	.text-xs {
		font-size: 20rpx;
	}
	.text-gray-500 {
		color: #6b7280;
	}
	.font-semibold {
		font-weight: 600;
	}
	
	/* 渐变色 */
	.gradient-orange {
		background-image: linear-gradient(to right, #ff8c42, #ff6347);
	}
	.gradient-blue {
		background-image: linear-gradient(to right, #4a90e2, #2a6fdb);
	}
	
	/* 颜色类 */
	.bg-red-100 { background-color: #fee2e2; }
	.text-red-600 { color: #dc2626; }
	.text-red-700 { color: #b91c1c; }
	.bg-blue-100 { background-color: #dbeafe; }
	.text-blue-600 { color: #2563eb; }
	.text-blue-700 { color: #1d4ed8; }
	.bg-blue-500 { background-color: #3b82f6; }
	.bg-yellow-100 { background-color: #fef9c3; }
	.bg-green-100 { background-color: #dcfce7; }
	.bg-indigo-100 { background-color: #e0e7ff; }
	.text-indigo-600 { color: #4f46e5; }
	.text-indigo-700 { color: #4338ca; }
	.bg-indigo-500 { background-color: #6366f1; }
	
	/* Banner */
	.banner-container {
		width: 100%;
		height: 20vh;
	}
	.banner {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* 关注公众号 */
	.follow-card {
		position: relative; 
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.follow-left {
		display: flex;
		align-items: center;
	}
	.avatar {
		width: 96rpx;
		height: 96rpx;
		border-radius: 9999px;
	}
	.follow-text {
		margin-left: 24rpx;
		display: flex;
		flex-direction: column;
	}
	.follow-btn-style {
		background-color: #ef4444;
		color: #ffffff;
		font-size: 24rpx;
		font-weight: 600;
		padding: 12rpx 32rpx;
		border-radius: 9999px;
		line-height: 1.5;
		margin: 0;
	}
	.official-account-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
    button::after {
        border: none;
    }

	/* 热门标签 */
	.tags-grid {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.tag-item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		/* 添加轻微的点击反馈效果 */
		transition: transform 0.2s;
	}
	.tag-item:active {
		transform: scale(0.95);
	}
	.tag-icon-wrapper {
		width: 112rpx;
		height: 112rpx;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tag-icon {
		width: 64rpx;
		height: 64rpx;
	}
	.tag-badge {
		position: absolute;
		top: -8rpx;
		right: 0rpx;
		background-color: #ef4444;
		color: #ffffff;
		font-size: 18rpx;
		padding: 4rpx 12rpx;
		border-radius: 9999px;
	}
	.tag-text {
		font-size: 24rpx;
		margin-top: 16rpx;
	}

	/* 精选推荐 */
	.tabs {
		display: flex;
		gap: 32rpx;
		font-size: 28rpx;
	}
	.tab-item {
		color: #6b7280;
	}
	.tab-item.active {
		color: #FF8C42;
		font-weight: 600;
		border-bottom: 2px solid #FF8C42;
		padding-bottom: 8rpx;
	}

	/* 套餐卡片 */
	.plan-card {
		background-color: #ffffff;
		border-radius: 12rpx;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		margin-top: 20rpx;
		margin-bottom: 32rpx;
		border: 1rpx solid #f0f0f0;
	}
	.plan-card-content {
		padding: 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.plan-details {
		display: flex;
		flex-direction: column;
	}
	.plan-title {
		font-weight: 700;
		font-size: 32rpx;
	}
	.plan-tags {
		margin-top: 16rpx;
		display: flex;
		gap: 16rpx;
	}
	.plan-tag {
		font-size: 20rpx;
		padding: 4rpx 16rpx;
		border-radius: 9999px;
	}
	.plan-data {
		text-align: right;
	}
	.data-amount {
		font-weight: 700;
	}
	.data-number {
		font-size: 80rpx;
	}
	.data-desc {
		font-size: 24rpx;
		color: #6b7280;
	}
	.plan-footer {
		margin-top: 24rpx;
		padding: 0 32rpx 32rpx 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.promo-badge {
		color: #ffffff;
		font-size: 24rpx;
		font-weight: 600;
		padding: 8rpx 24rpx;
		border-radius: 8rpx;
	}
	.plan-btn {
		color: #ffffff;
		font-weight: 700;
		font-size: 28rpx;
		padding: 16rpx 64rpx;
		border-radius: 9999px;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		line-height: 1.5;
		margin: 0;
	}
	.customer-service {
		color: #ef4444;
		font-size: 28rpx;
		font-weight: 600;
		padding: 8rpx 24rpx;
	}

	/* 免责声明样式 */
	.disclaimer {
		padding: 40rpx 30rpx;
		text-align: center;
	}
	.disclaimer-text {
		font-size: 22rpx;
		color: #b0b0b0;
		line-height: 1.5;
	}
</style>
