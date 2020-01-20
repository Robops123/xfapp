<template>
	<view class="content b-t">
		<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower" style="max-height: calc(100vh - 260upx);">
		 <!-- 未提交 -->
		 <view class="list b-b" v-if="finish==1">
		 	<view class="wrapper">
		 		<view class="Patrol-box">
		 			<!-- <text v-if="item.default" class="tag">默认</text> -->
		 			<text class="Patrol">巡检内容:{{form.remark}}</text>
		 		</view>
		 		<view class="u-box">
		 			<text class="name">巡检人:{{name}}</text>
		 			<text class="mobile">巡检时间:{{form.startTime}}</text>
		 		</view>
		 	</view>
		 	<!-- <text class="yticon icon-bianji" @click.stop="addPatrol('edit', item)"></text> -->
		 			<button type="primary" size="mini" @click="submit">提交</button>
		 </view>
		 
		 
		 <view class="list b-b" v-for="(item, index) in PatrolList" :key="index" @click="checkPatrol(item)">
		 	<view class="wrapper">
		 		<view class="Patrol-box">
		 			<!-- <text v-if="item.default" class="tag">默认</text> -->
		 			<text class="Patrol">巡检点:{{item.address}} {{item.content}}</text>
		 		</view>
		 		<view class="u-box">
		 			<text class="name">巡检人:{{item.inspector}}</text>
		 			<text class="mobile">巡检时间:{{item.createTime}}</text>
		 		</view>
		 	</view>
		 	<!-- <text class="yticon icon-bianji" @click.stop="addPatrol('edit', item)"></text> -->
		 </view>
		 </scroll-view>
		
		<!-- <text style="display:block;padding: 16upx 30upx 10upx;lihe-height: 1.6;color: #4f82f8;font-size: 24upx;">
			重要：提示
		</text> -->
		
		<button class="add-btn" @click="addPatrol('add')">开始新增巡检</button>
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
				page:1,
				source: 0,
				total:0,
				PatrolList: [
				],
				form:{},
				finish:0,
				name:uni.getStorageSync('userName')
			}
		},
		onLoad(option){
			this.getList()
			if(uni.getStorageSync('operation').finish==1){
				this.form=uni.getStorageSync('operation')
				this.finish=1
			}
			this.source = option.source;
		},
		onShow(){
			
		},
		methods: {
			submit(){
				if(this.networkEnable()){
					global.showLoading()
					this.submitTrouble()
				}else{
					global.showToast('网络不可用')
				}
			},
			//选择地址
			checkPatrol(item){
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().PatrolData = item;
					uni.navigateBack()
				}
			},
			getList(){
				var that = this
				var param = {
					tenantId:uni.getStorageSync('tenantId'),
					current:this.page,
					size:10
				}
				request.apiGet('/check',param).then((res) =>{
					if(res.code == 200){
						that.total=res.data.total
							if(that.page==1){
								that.PatrolList=res.data.records
							}else{
								that.PatrolList=that.PatrolList.concat(res.data.records)
							}
						
					}
				})
			},
			addPatrol(type, item){
				uni.navigateTo({
					url: '/pages/startPatrol/startPatrol'
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.PatrolList.unshift(data);
				
				console.log(data, type);
			},
			scrolltolower(){
				if(this.PatrolList.length<this.total){
					this.page++
					this.getList()
				}
			},
			submitForm(){
				var that=this
				request.apiPost('/check/add/',that.form).then((res) =>{
					if(res.code == 200){
						global.hideLoading()
						global.showToast('提交成功')
						 uni.removeStorageSync('operation');
						 uni.removeStorageSync('xgItems');
						 uni.removeStorageSync('activityId');
						 setTimeout(function(){
							 uni.navigateBack({
							 	delta:1
							 })
						 },1000)
					}else{
						global.hideLoading()
						global.showToast('提交失败')
					}
				})
			},
			submitTrouble(){
				var that=this
				this.findTrouble(this.form.xgId,null,(res) =>{
					console.log(res)
					if(res){
						if(res.length>0){
							res.forEach((item) =>{
								if(item.pictures){
									var pic=[]
									pic=item.pictures.split(',')
									that.uploadImg(item,pic,0,'')
								}else{
									that.submitHazard(item)
								}
							})
						}else{
							that.submitForm()
						}
					}else{
						that.submitForm()
					}
				},() =>{
					console.log('err')
					that.submitForm()
				})
				
			},
			submitHazard(data){
				var that=this
				request.apiPost('/hazard/add/',data).then((res) =>{
							if(res.code == 200){
								that.uploaded++
								if(that.uploaded==that.total){
									that.submitForm()
								}
							}else{
								global.hideLoading()
								global.showToast('提交失败')
							}
						}).catch(reason =>{
							global.hideLoading()
							global.showToast('请检查网络')
						})
			},
			uploadImg(item,imgsrcs,sequence,uploadback){
				var that=this
				uni.uploadFile({
						// 47.103.152.26:9089   192.168.0.142:8081
						url:request.baseURL+'/hazard/upload',
						filePath:imgsrcs[sequence],
						// files:fileList,
						name:'file',
						header:{
							'Accept': 'application/json',
							'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
						},
						success:(success) =>{
							var res=JSON.parse(success.data)
							if(res.code==200){
								if(sequence<imgsrcs.length-1){
									sequence++
									uploadback+=res.data+','
									that.uploadImg(item,imgsrcs,sequence,uploadback)
								}else if(sequence==imgsrcs.length-1){
									uploadback+=res.data
									item.pictures=uploadback
									that.submitHazard(item)
								}
								
							}else{
								global.showToast('图片上传失败')
							}
						},
						fail:(reason) =>{
							global.showToast('请检查网络连接')
						}
					})
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
	.Patrol-box{
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
		.Patrol{
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
	uni-button{
		height: initial;
	}
</style>
