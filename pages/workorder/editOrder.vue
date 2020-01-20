<template>
	<view>		
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">工单编号</text>
				<text class="cell-tip cell-cot" v-model="orderCode">33312312</text>
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工人:</text>
				<text class="cell-cot">{{maintainName}}</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工时间:</text>
				<text class="cell-cot">{{assignTime}}</text>
			</view>
			
		</view>
		<view class="yt-list">
			<!-- <view class="yt-list-cell desc-cell" >
				<text class="cell-tit clamp">处置记录:</text>
				<input class="desc" type="text" placeholder="输入处置过程或记录" placeholder-class="placeholder" />
			</view> -->
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">执行人:</text>
				<text class="cell-cot">{{userName}}</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">维保地点:</text>
				<text class="cell-cot">{{maintainLocation}}</text>
			</view>
			<!-- <view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工地点:</text>
				<text>无锡-滨湖区</text>
			</view> -->
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">工作内容:</text>
				<text class="cell-cot">{{remark}}</text>
			</view>
			<!-- <view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">完成时间:</text>
				<text class="cell-cot">2019-3-20</text>
			</view> -->
			<!-- <view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">完成时间:</text>
				<text>2019-3-11</text>
			</view> -->
		</view>
		
		<view class="yt-list " :class="{'bgwhite':type==2}">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">执行时间:</text>
				<text class="cell-cot">{{form.doneTime}}</text>
			</view>
		</view>
		
		<view class="yt-list " :class="{'bgwhite':type==2}">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">工作内容:</text>
				<textarea :disabled='type==3' v-model="form.remark" placeholder="请输入工作内容" class="cell-cot"/>
			</view>
		</view>
		
		<view class="yt-list" :class="{'bgwhite':type==2}">
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head"  style="margin-left: 40upx;">
							<view class="uni-uploader-title">隐患记录图片（最多9张）</view>
							<view class="uni-uploader-info">{{imageList.length}}/9</view>
						</view>
						<view class="uni-uploader-body"  style="margin-left: 30upx;">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in imageList" :key="index">
									<view class="uni-uploader__file">
										<view class="delete" @click="deleteimg(index)" v-if="type==2">-</view>
										<image class="uni-uploader__img" :src="image" :data-src="image" ></image>
									</view>
								</block>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" :disabled='type==3' @tap="chooseImage" @change='imgchange'></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>	
		<!-- 受检人信息 -->
		<!-- <view class="yt-list " :class="{'bgwhite':type==2}">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" :disabled='type==3' v-model="form.remark" placeholder="请填写备注信息" placeholder-class="placeholder" />
			</view>
		</view> -->
		<!-- 底部 -->
		<view class="footer">
			<!-- <view class="price-content">
				<text>工单状态：</text>
				<text class="price-tip">新建</text>
			</view> -->
			<button v-show="order_no==''" :disabled='type==3 || uploading' class="submit" @click="submit">提交工单</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	export default {
		components: {
			uniIcon,
		},
		data() {
			return {
				order_no: '',
				select_item: '',
				price_type: 'common_price',
				product_name: '',
				product_image1: '',
				price: 0,
				sourceType:[
					['camera'],
					['album'],
					['camera', 'album']
				],
				price1: 0,
				price2: 0,
				tempImgList:[],
				price3: 0,
				activeIndex: -1,
				uploading:false,
				desc: '',
				index: 0,
				type:null,
				items: [],
				indexSex: 0,
				arraySex: [{
					sexname: '男'
				}, {
					sexname: '女'
				}],
				indexOld: 40,				
				seller_id: 0,
				consultant: '',
				consultant_id: 0,
				consultant_phone: '',
				buyer: '',
				buyer_phone: '',
				buyer_collector: '',
				maintainName:'',
				remark: '',
				uploaded:0,
				orderCode:'',
				userName:'',
				maintainLocation:'',
				assignTime:'',
				imageList: [],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				form:{
					tenantId:uni.getStorageSync('tenantId'),
					orderId:'',
					repairUser :'',
					endTime :'',
					remark :'',
					filePath:''
				}
			}
			
		},
		onLoad(p){
			var params=JSON.parse(p.params)
			var that=this
			this.form.orderId=params.orderId
			this.form.repairUser=params.maintainName
			this.form.endTime=params.doneTime
			this.form.remark=params.feedback
			
			this.type=p.type
			
			this.remark=params.remark
			this.maintainName=params.maintainName
			this.orderCode=params.orderCode
			this.userName=params.userName
			this.maintainLocation=params.maintainLocation
			this.assignTime=params.assignTime
			
			if(params.filePath!=null){
				var pics=[]
				pics=params.filePath.split(',')
				pics.forEach((item) =>{
					if(item!=''){
						that.imageList.push(params.picServer+item)
					}
					
				})
				
			}
// 			this.form.orderId=p.params.orderId
// 			this.form.repairUser=p.params.maintainName
// 			this.form.repairUser=p.params.maintainName
		},
		methods: {
			submit(){
				var that=this
				global.showLoading()
				console.log(this.form)
				request.apiPost('/workOrder/handle',this.form).then((res) =>{
					console.log(res)
					if(res.code == 200){
						global.showToast('提交成功')
						uni.$emit('handleSubmit')
						setTimeout(function(){
							uni.navigateBack({
								delta: 1
							});
						},1000)
					}else{
						global.showToast('提交失败')
					}
					global.hideLoading()
				}).catch(reason =>{
					global.hideLoading()
					global.showToast('网络出错')
				})
			},
			chooseImage: async function() {
				var that=this
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: this.sourceType[this.sourceTypeIndex],
					sizeType: [ 'compressed'],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						// this.imageList = this.imageList.concat(res.tempFilePaths);
						that.compressImage(res.tempFilePaths)
							// if(that.networkEnable()){
							// 	that.compressImage(res.tempFilePaths)
							// }else{
								
							// }
					}
				})
			},
			compressImage(imgSrcs){
				var that=this
				that.uploading=true
				imgSrcs.forEach((item,index) =>{
					var temp=item.split('/')
					var name=temp[temp.length-1]
					plus.zip.compressImage({
							src:item,
							dst:"_doc/"+name,
							quality:10
						},
						function(res) {
							that.uploadImg(res.target,imgSrcs.length)
							
						},function(error) {
							global.showToast('图片压缩失败')
							// alert("Compress error!");
					});
				})
			},
			deleteimg(index){
				this.imageList.splice(index,1)
				// this.form.pictures.splice(index,1)
			},
			uploadImg(imgsrc,num){
				var l=this.imageList.length,that=this
				if(l==0){
					return
				}
				that.uploading=true
						// if(that.networkEnable()){
							uni.uploadFile({
								// 47.103.152.26:9089   192.168.0.142:8081
								url:request.baseURL+'/hazard/upload',
								filePath:imgsrc,
								// files:fileList,
								name:'file',
								header:{
									'Accept': 'application/json',
									'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
								},
								success:(success) =>{
									var res=JSON.parse(success.data)
									if(res.code==200){
										that.uploaded++
										that.tempImgList.push(imgsrc)
										if(that.uploaded<num){
											that.form.filePath+=res.data+','
										}else if(that.uploaded==num){
											that.imageList=that.imageList.concat(that.tempImgList)
											that.form.filePath+=res.data
											that.uploading=false
										}
										
									}else{
										global.showToast('图片上传失败')
										that.uploading=false
									}
								},
								fail:(reason) =>{
									that.uploading=false
									global.showToast('请检查网络连接')
								}
							})
						// }else{
								// uni.saveFile({
								//       tempFilePath: imgsrc,
								//       success: function (res) {
								//        that.form.pictures.push(res.savedFilePath) 
								// 	   if(that.form.pictures.length==l){
								// 		   that.uploading=false
								// 		   that.imageList=that.form.pictures
								// 	   }
								//       }
								//     });
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: gainsboro;
		padding-bottom: 100upx;
	}

	.goods-section {
		margin-top: 0upx;
		// background: #fff;
		padding-bottom: 1px;

		.g-item {
			display: flex;
			margin: 0upx 40upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 180upx;
				height: 180upx;
				border-radius: 4upx;
				margin-top: 30upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
				margin-top: 30upx;
			}

			.title {
				font-size: 30upx;
				color: black;
			}

			.spec {
				display: flex;
				margin-top: 15upx;
				font-size: 26upx;
				color: darkgray;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: black;
				padding-top: 20upx;

				.price {
					margin-bottom: 4upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}

	.yt-list {
		border-top: 1px solid #e8e7e7;
		border-bottom: 1px solid #e8e7e7;
		margin-top: 16upx;
		background: #f4f0f0;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;

			&.hb {
				background: #ffaa0e;
			}

			&.lpk {
				background: #3ab54a;
			}

		}

		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: dimgray;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: 26upx;
			color: #f85e52;

			&.disabled {
				color: #f85e52;
			}

			&.active {
				color: #f85e52;
			}

			&.red {
				color: #f85e52;
			}
		}

		&.desc-cell {
			.cell-tit {
				max-width: 140upx;
				    align-self: flex-start;
			}
			.cell-cot{
				max-width: calc(100% - 140upx);
				word-break: break-word;
			}
		}

		.desc {
			flex: 1;
			font-size: 28upx;
			color: darkgray;
		}

		switch {
			transform: translateX(16upx) scale(.84);
		}
	}


	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		text-align: center;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		// background-color: #fff;
		z-index: 998;
		// box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			padding-left: 30upx;
		}

		.price-tip {
			color: #f85e52;
			margin-left: 8upx;
		}

		.price {
			font-size: 36upx;
			color: #f85e52;
		}

		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280upx;
			height: 80%;
			border-radius: 10px;
			color: #fff;
			margin: 0 auto;
			font-size: 32upx;
			background-color: #3866ef;
		}

		.cell-pd {
			padding: 22upx 30upx;
		}

		.list-pd {
			margin-top: 50upx;
		}
	}
	.uni-list{
		background-color: transparent;
		}
		.uni-uploader-body{
			padding:0 0 30upx 10upx;
		}
		.bgwhite{
			background: #fff;
		}
		.uni-uploader__file{
			position: relative;
		}
		.delete{
			position: absolute;
			right: -10px;
			top: -10px;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: red;
			color: #333333;
			text-align: center;
			line-height: 20px;
			font-size: 16px;
		}
</style>
