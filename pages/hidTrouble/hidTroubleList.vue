<template>
	<view class="content b-t">
		<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower" style="max-height: calc(100vh - 260upx);">
			<view class="list b-b yt-list xgs" v-for="(item, index) in addressList" :key="index" @click="checkAddress(index,item)">
				<view class="wrapper">
					<view class="address-box">
						<text class="address">{{item.content}}</text>
					</view>
					<view class="u-box">
						<!-- <text class="name">上报人: {{item.userName}}</text> -->
						<text class="mobile">{{item.createTime}}</text>
					</view>
					<!-- <view class="u-box">
						<text class="name">地点: {{item.address}}</text>
					</view> -->
				</view>
				<view class="arrow">></view>
				<!-- <text class="yticon icon-bianji" @click.stop="addAddress('edit', item)"></text> -->
			</view>
			</scroll-view>
		
		<!-- <text style="display:block;padding: 16upx 30upx 10upx;lihe-height: 1.6;color: #4f82f8;font-size: 24upx;">
			重要：
		</text> -->
		
		<button class="add-btn" @click="addAddress('add')" v-if='editable==false'>新增上报隐患</button>
	</view>
</template>

<script>
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	import {Common} from '../../static/js/Common.js'
	export default {
		mixins:[Common],
		data() {
			return {
				source: 0,
				total:0,
				page:1,
				editable:false,
				addressList: [
				]
			}
		},
		onLoad(p){
			var that=this
			if(p.editable){
				this.editable=true
					that.findTrouble(uni.getStorageSync('activityId'),null,(res) =>{
						that.addressList=res
						// that.$forceUpdate()
					},() =>{
						console.log('错误')
					})
			}else{
				this.editable=false
				this.getList()
			}
			
		},
		methods: {
			//选择地址
			checkAddress(index,item){
				if(this.editable){
						uni.navigateTo({
							url: '/pages/startPatrol/report?index='+index
						})
				}else{
					var params=JSON.stringify(item)
					uni.navigateTo({
						url: '/pages/startPatrol/report?index='+index+'&params='+params
					})
				}
			},
			getList(){
				var that = this
				var param = {
					tenantId:uni.getStorageSync('tenantId'),
					current:this.page,
					size:10
				}
				request.apiGet('/hazard',param).then((res) =>{
					if(res.code == 200){
							if(this.page==1){
								that.addressList=res.data.records
							}else{
								that.addressList=that.addressList.concat(res.data.records)
							}
						that.total=res.data.total
					}
				})
			},
			getLatestList(page){
				var that = this
				var param = {
					tenantId:uni.getStorageSync('tenantId'),
					current: page,
					size:10
				}
				request.apiGet('/hazard',param).then((res) =>{
					console.log(res)
					if(res.code == 200){
							if(this.page==1){
								that.addressList=res.data.records
							}else{
								var l=res.data.records.length
								that.addressList=that.addressList.concat(res.data.records[l-1])
							}
						that.total=res.data.total
					}
				})
			},
			addAddress(type, item){
				var that=this
				uni.$on('troubleListUpdate',function(){
					console.log('刷新')
					// that.getList()
					if(that.total%10==0){
						that.page++
					}
					that.getLatestList(that.page)
					uni.$off('troubleListUpdate')
				})
				uni.navigateTo({
					url: `/pages/hidTrouble/hidTroubleEdit`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			},
			scrolltolower(){
				if(this.addressList.length<this.total){
					this.page++
					this.getList()
				}
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
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
		.tag{
			font-size: 24upx;
			color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}
		.address{
			font-size: 30upx;
			color: $font-color-dark;
		}
	}
	.u-box{
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}
	
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
	.xgs{
		padding: 10upx 30upx 10upx 40upx;
		border-top: 1px solid #e8e7e7;
		border-bottom: 1px solid #e8e7e7;
		position: relative;
		margin: 8px 0;
	}
	.xgs text{
		font-size: 13px;
	}
	.xgs .top{
		margin-bottom: 20upx;
	}
	.xgs .offsetright{
		margin-left: 50upx;
	}
	.xgs .arrow{
		position: absolute;
		right: 20px;
		color: #b2b2b2;
		top: 45%;
	}
	.xgs .c666{
		color: #666;
	}
</style>
