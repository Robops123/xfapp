<template>
	<view class="content">
		<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower1" style="max-height: calc(100vh - 180upx);">
			<view class="list b-b" v-for="(item, index) in warnList" :key="index">
				<view class="wrapper">
					<view class="address-box flex">
						<text class="address">告警设备: ({{item.devTypeName}}) {{item.devName}}</text>
						<view class="tip">{{item.warnStatus}}</view>
					</view>
					<view class="address-box">
						<text class="address">告警类型: {{item.warnTypeName}}</text>
						<!-- <text class="address">告警状态: {{item.warnStatus}}</text> -->
					</view>
					<view class="u-box">
						<text class="mobile">告警时间: {{item.warnDate}}</text>
					</view>
				</view>
			</view>
			</scroll-view>
	</view>
</template>

<script>
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	export default {
		data() {
			return {
				title: 'Hello',
				page1:1,
				limit1:10,
				warnList:[],
				warnListTotal:1,
				lists: [
					{
						"tit1": "新工单通知",
						"tit2": "有新的工单指派到您，点击查看",
						"time": "08:48",
						"img": '../../static/img/icon-item-001.png',
						"url":'/pages/workorder/workorderlist'
					},
					{
						"tit1": "设备报警",
						"tit2": "设备报警通知，点击查看",
						"time": "08:48",
						"img": '../../static/img/icon-item-002.png',
						"url":'/pages/remoteSilencer/remoteSilencer'
					}/* ,
					{
						"tit1": "账户通知",
						"tit2": "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
						"time": "昨天",
						"img": '../../static/img/icon-item-003.png'
					},
					{
						"tit1": "互动问答",
						"tit2": "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
						"time": "星期六",
						"img": '../../static/img/icon-item-004.png'
					},
					{
						"tit1": "物流助手",
						"tit2": "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
						"time": "星期六",
						"img": '../../static/img/icon-item-005.png'
					}, */
				],
			}
		},
		onLoad() {
		this.getWarnList()
		},
		methods: {
			goHandle(url)
			{
				uni.navigateTo({
					url:url
				})
			},
			// 告警列表分页
			scrolltolower1(){
				if(this.warnList.length<this.warnListTotal){
					this.page1++
					this.getWarnList()
				}
			},
			// 告警列表
			getWarnList(){
					var that = this
					var params={
						tenantId:uni.getStorageSync('tenantId'),
						current:this.page1,
						size:this.limit1
					}
					global.showLoading()
					request.apiGet('/device/warnLog',params).then((res) =>{
						if(res.code == 200){
							if(that.warnList.length==0){
								that.warnList=res.data.records
							}else{
								that.warnList=that.warnList.concat(res.data.records)
							}
							that.warnListTotal=res.data.total
						}else{
							global.showToast('无法获取告警列表')
						}
						global.hideLoading()
					}).catch(reason =>{
						global.hideLoading()
						global.showToast('请检查网络')
					})
			},
		}
	}
</script>

<style lang="less">
	 @import '../../static/css/style.css'; 
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 0 20upx 30upx;
		margin: 10px 0 15px;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.tag{
			font-size: 24upx;
			// color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}
		.address{
			font-size: 30upx;
			// color: $font-color-dark;
		}
	}
	.tip{
		background: #d8d8d8;
		border-radius: 50% 0 0 50%;
		text-align: center;
		padding: 5px 10px;
	}
	.flex{
		display: flex;
		justify-content: space-between;
	}
</style>
