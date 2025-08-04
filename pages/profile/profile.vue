﻿<template>
	<view class="profile-page">
		<!-- 用户信息区域 -->
		<view class="profile-header">
			<image class="avatar" src="/static/A.png" mode="aspectFill"></image>
			<text class="nickname">点击登录</text>
		</view>

		<!-- 功能菜单列表 -->
		<view class="menu-list">
			<view class="menu-item">
				<image class="menu-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTAgMTUuNWwtMy41LTMuNSAxLjUtMS41TDEwIDEyLjVsNS01IDEuNSAxLjV6Ij48L3BhdGg+PHBhdGggZD0iTTMgMTJoLjAxIj48L3BhdGg+PHBhdGggZD0iTTcgMTJoLjAxIj48L3BhdGg+PHBhdGggZD0iTTExIDEyaC4wMSI+PC9wYXRoPjxwYXRoIGQ9Ik0zIDE4aC4wMSI+PC9wYXRoPjxwYXRoIGQ9Ik03IDE4aC4wMSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMSAxOGguMDEiPjwvcGF0aD48cGF0aCBkPSJNNiA2aDEyIj48L3BhdGg+PHBhdGggZD0iTTYgMTJoLTgiPjwvcGF0aD48L3N2Zz4="></image>
				<text class="menu-text">我的订单</text>
				<text class="arrow">›</text>
			</view>
			<view class="menu-item">
				<image class="menu-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCAxMiAyMCAyMiA0IDIyIDQgMTIiPjwvcG9seWxpbmU+PHJlY3QgeD0iMiIgeT0iNyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjUiPjwvcmVjdD48bGluZSB4MT0iMTIiIHkxPSIyMiIgeDI9IjEyIiB5Mj0iNyI+PC9saW5lPjxwYXRoIGQ9Ik0xMiA3SDcuNWEyLjUgMi41IDAgMCAxIDAtNUMxMSAyIDEyIDcgMTIgN3oiPjwvcGF0aD48cGF0aCBkPSJNMTIgN2g0LjVhMi41IDIuNSAwIDAgMCAwLTVDMTMgMiAxMiA3IDEyIDd6Ij48L3BhdGg+PC9zdmc+"></image>
				<text class="menu-text">优惠券</text>
				<text class="arrow">›</text>
			</view>
			<view class="menu-item">
				<image class="menu-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNW EyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6Ij48L3BhdGg+PC9zdmc+"></image>
				<text class="menu-text">联系客服</text>
				<text class="arrow">›</text>
			</view>
			<view class="menu-item">
				<image class="menu-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIj48L2NpcmNsZT48cGF0aCBkPSJNMTkuNCAxNWExLjY1IDEuNjUgMCAwIDAgLjMzIDEuODJsLjA2LjA2YTIgMiAwIDAgMSAwIDIuODMgMiAyIDAgMCAxLTIuODMgMGwtLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAtMS44Mi0uMzMgMS42NSAxLjY1IDAgMCAwLTEgMS41MVYyMW EyIDIgMCAwIDEtMiAyIDIgMiAwIDAgMS0yLTJ2LS4wOUExLjY1IDEuNjUgMCAwIDAgOSAxOS40YTEuNjUgMS42NSAwIDAgMC0xLjgyLjMzbC0uMDYuMDZhMiAyIDAgMCAxLTIuODMgMCAyIDIgMCAwIDEgMC0yLjgzbC4wNi0uMDZhMS42NSAxLjY1IDAgMCAwIC4zMy0xLjgyIDEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNmExLjY1IDEuNjUgMCAwIDAgMS44Mi4zM0g5YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZhMS42NSAxLjY1IDAgMCAwLS4zMyAxLjgyVjlhMS42NSAxLjY1IDAgMCAwIDEuNTEgMUgyMW EyIDIgMCAwIDEgMiAyIDIgMiAwIDAgMS0yIDJoLS4wOWExLjY1IDEuNjUgMCAwIDAtMS41MSAxek0xMiA5djYiPjwvcGF0aD48L3N2Zz4="></image>
				<text class="menu-text">设置</text>
				<text class="arrow">›</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/* 页面整体背景色 */
	page {
		background-color: #f7fafc;
	}

	.profile-page {
		display: flex;
		flex-direction: column;
	}

	/* 头部用户信息样式 */
	.profile-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 60rpx 0 80rpx 0;
		background: linear-gradient(to bottom, #FFD1A8, #FF8C42);
	}

	.avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		border: 6rpx solid rgba(255, 255, 255, 0.5);
	}

	.nickname {
		font-size: 36rpx;
		font-weight: 600;
		margin-top: 30rpx;
		color: #ffffff;
		text-shadow: 0 2rpx 4rpx rgba(0,0,0,0.1);
	}
	
	/* 菜单列表样式 */
	.menu-list {
		width: auto;
		margin: -40rpx 30rpx 0 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.08);
		padding: 10rpx 0;
	}
	
	.menu-item {
		display: flex;
		align-items: center;
		padding: 32rpx;
		border-bottom: 1rpx solid #f0f0f0;
	}
	
	.menu-item:last-child {
		border-bottom: none;
	}
	
	.menu-icon {
		width: 44rpx;
		height: 44rpx;
		margin-right: 24rpx;
	}
	
	.menu-text {
		font-size: 30rpx;
		color: #374151;
		flex-grow: 1;
	}
	
	.arrow {
		font-size: 36rpx;
		color: #9ca3af;
	}
</style>
