<template>
	<view class="content b-t">
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">巡检点：{{name}}</text>
			</view>
		</view>
		
		<view class="yt-list" v-for="(items,index) in xgItemList" :key='index'>
			<view class="yt-list-cell desc-cell sub-title">
				<text class="cell-tit clamp" style="color: #666;">{{items.typeName}}:</text>
			</view>
			<view class="xgitem">
				<!-- <view class="sub-line"></view> -->
				<view class="space-between" v-for="(item,index2) in items.itemList" :key='index2'>
					<text>{{item.itemName}}：</text>
					 <switch :checked='item.value==1 ? true:false' color='red' @change="switch1Change" class="sp" :data-index1="index" :data-index2="index2"/>
				</view>
			</view>
		</view>
		
		
		<view class="btn-box">
			<button class="btn1" @click="save()">暂存</button>
			<button class="btn2" @click="addAddress()">隐患上报</button>
		</view>
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
				name:'',
				index:'',
				xgItems:[],
				xgItemList: [
				]
			}
		},
		onLoad(p){
			var that=this
			this.index=p.index
			this.name=p.name
			this.xgItems=uni.getStorageSync('xgItems')
			this.xgItemList=uni.getStorageSync('xgItems')[p.index]
		},
		methods: {
			save(){
				this.xgItemList.forEach((items) =>{
					items.itemList.forEach((item,index) =>{
						if(!item.value){
							item.value=0
						}
					})
				})
				this.xgItems[this.index]=this.xgItemList
				uni.setStorageSync('xgItems',this.xgItems)
				global.showToast('保存成功')
				uni.$emit('saveComplete',this.index)
				setTimeout(function(){
					uni.navigateBack({
						delta:1
					})
				},1000)
			},
			addAddress(){
					// if(item.result==0){
						uni.navigateTo({
							url: '/pages/startPatrol/report?index='+this.index
						})
			},
			switch1Change(e){
				var re=e.detail.value    //true false
				var index1=e.target.dataset.index1   //第几组
				var index2=e.target.dataset.index2  //第几个
				console.log(e)
				if(re){
					this.xgItemList[index1].itemList[index2].value=1
				}else{
					this.xgItemList[index1].itemList[index2].value=0
				}
				console.log(this.xgItemList)
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
		font-size: 13px;
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
	.btn-box{
		position: fixed;
		bottom: 16upx;
		padding: 20upx 0;
		left: 0;
		right: 0;
		background: white;
		display: flex;
		justify-content: space-around;
	}
	.btn-box button{
		width: 45%;
		border-radius: 8px;
		/* margin: 0 4%; */
	}
	.btn-box .btn1{
		background: #abcbfe;
		color: black;
	}
	.btn-box .btn2{
		background: transparent;
		border: 1px solid #abcbfe;
		color: #abcbfe;
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
	.xgitem{
		position: relative;
	}
	.yt-list {
		border-top: 1px solid #e8e7e7;
		border-bottom: 1px solid #e8e7e7;
		margin-top: 16upx;
		background: #f4f0f0;
		padding: 10upx 30upx 10upx 40upx;
	}
	.xgitem .space-between{
		/* display: inline-block; */
		display: flex;
		justify-content: space-between;
		/* width: 48%; */
		/* margin: 0 1%; */
		/* vertical-align: middle; */
	}
	.xgitem{
		/* display: flex;
		justify-content: space-between; */
	}
	.xgitem .space-between switch{
		transform: scale(0.7);
	}
	.sub-title{
		margin-bottom: 15px;
		border-bottom: 1px solid #3C3C3C;
	}
	.sub-line{
		width: 1px;
		border-left: 1px dashed #666;
		height: 90%;
		position: absolute;
		left: 50%;
		top: 5%;
	}
</style>
