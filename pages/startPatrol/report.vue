<template>
	<view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">上报时间</text>
				<picker @change="bindPickerChange2" :value="date" disabled :start="startDate" :end="endDate"  mode = date>
				    <view class="uni-input">{{date}}</view>
				</picker>
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">上报人</text>
				<input class="desc uni-input" type="text" disabled v-model="name" placeholder="请填写隐患上报人姓名" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell" style="display: flex;justify-content: space-between;">
				<text class="cell-tit clamp" style="align-self: start;">上报内容</text>
				<textarea value="" :disabled='!editable' v-model="form.content" placeholder="请填写隐患信息" style="width: calc(100vw - 240upx);height: 60px;display: inline-block;"/>
				<!-- <input class="desc" type="textarea"  placeholder="" placeholder-class="placeholder" /> -->
			</view>
		</view>
		<!-- <view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">隐患设备</text>
				<picker @change="bindPickerChange" :value="form.index" :range="devList" mode = selector>
				    <view class="uni-input">{{devList[form.index]}}</view>
				</picker>
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">隐患地点</text>
				<input class="desc" type="text" v-model="form.address" placeholder="请填写隐患信息" placeholder-class="placeholder" />
			</view>
		</view> -->
		
		
		<!-- 受检人信息 -->
		<view class="yt-list">
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
										<view class="delete" @click="deleteimg(index)">-</view>
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImage" @change='imgchange'></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>		
			
		<button class="add-btn" @click="submit" :disabled="uploading || !editable">{{uploading ? '图片处理中，请等候':"保存"}}</button>
		<!-- <button @click="consoleform">当前form</button> -->
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	// var wx = require('@/node_modules/jweixin-module');
	import uniIcons from '@/components/uni-icon/uni-icon.vue';
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	import {Common} from '../../static/js/Common.js'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		mixins:[Common],
		components: {
			uniIcons,
		},
		onLoad(p){
			var that=this
			this.number=p.index
			console.log(this.number)
			// if(JSON.parse(p.params).result==0){
			// 	this.form=uni.getStorageSync('report'+this.number)
			// 	this.imageList=uni.getStorageSync('pictures'+this.number)
			// 	this.offlineImgList=uni.getStorageSync('pictures'+this.number)
			// 	this.offline=true
			// 	// this.uploadImg(this.imageList)
			// }
			this.form.tenantId=uni.getStorageSync('tenantId')
			this.name=uni.getStorageSync('userName')
			
			// this.devList=uni.getStorageSync('devList')
			// this.devListAll=uni.getStorageSync('devListAll')
			// this.getDevList()
				if(p.params){
					this.editable=false
					var param=JSON.parse(p.params)
					this.form.content=param.content
					this.date=param.createTime
					if(param.filePath!=null){
						var pics=[]
						pics=param.filePath.split(',')
						pics.forEach((item) =>{
							if(item!=''){
								that.imageList.push(param.picServer+item)
							}
							
						})
						
					}
				}else{
					this.findTrouble(uni.getStorageSync('activityId'),this.number,(res) =>{
						if(res!=''){
							that.isNew=false
							that.form=res[0]
							if(res[0].pictures=='' || res[0].pictures==undefined){
								that.form.pictures=[]
							}else{
								var pic=[]
								pic=res[0].pictures.split(',')
								that.form.pictures=pic
								that.imageList=pic
							}
						}else{
							that.isNew=true
							console.log('无记录')
						}
					},() =>{
						console.log('未见表')
						that.isNew=true
					})
				}
		},
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				uploading:false,
				isNew:false,
				order_no: '',
				select_item: '',
				price_type: 'common_price',
				product_name: '',
				product_image1: '',
				price: 0,
				number:null,
				date:currentDate,
				price1: 0,
				price2: 0,
				price3: 0,
				activeIndex: -1,
				desc: '',
				items: [],
				devList:[],
				devListAll:[],
				indexSex: 0,
				indexOld: 40,
				seller: '',
				seller_id: 0,
				consultant: '',
				consultant_id: 0,
				consultant_phone: '',
				buyer: '',
				buyer_phone: '',
				buyer_collector: '',
				editable:true,
				remark: '',
				imageList: [],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				choosedImg:[],
				tempImgList:[],
				offlineImgList:[],
				uploaded:0,
				name:'',
				offline:false,
				form:{
					// index: 0,
					content:'',
					// address:"",
					pictures:[],
					createTime :currentDate,
					// devId :'',
					tenantId:'',
					checkId :uni.getStorageSync('activityId')
				}
			}
		},
		computed: {
			...mapState(['userRole']),
			 startDate() {
			            return this.getDate('start');
			        },
			        endDate() {
			            return this.getDate('end');
			        }
		},
		methods: {
			checkboxChange: function(e) {
				this.select_item = e.detail.value;
			},
			consoleform(){
				console.log(this.form)
			},
			// getDevList(){
				
			// 		var that = this
			// 		var params={
			// 			tenantId:uni.getStorageSync('tenantId')
			// 		}
			// 		request.apiGet('/check/deviceList',params).then((res) =>{
			// 			if(res.code == 200){
			// 				that.devListAll=res.data
			// 				that.form.devId=res.data[0].devId
			// 				res.data.forEach((item) =>{
			// 					that.devList.push(item.devName)
			// 				})
			// 			}else{
			// 				global.showToast('无法获取设备')
			// 			}
			// 		}).catch(reason =>{
			// 			global.hideLoading()
			// 			global.showToast('请检查网络')
			// 		})
			// },
			submit(){
				if(this.form.devId==''){
					this.form.devId=this.devListAll[0].devId
				}
				this.form.order=this.number
					// if(this.networkEnable()){
					// 	var that = this
					// 	global.showLoading()
					// 	if(that.offline){
					// 		that.uploadImgBeforeSubmit(that.offlineImgList)
					// 	}else{
					// 		console.log(this.form)
					// 		request.apiPost('/hazard/add/',this.form).then((res) =>{
					// 			global.hideLoading()
					// 			if(res.code == 200){
					// 				global.showToast('提交成功')
					// 				uni.$emit('submitResult',{index:this.number,result:1})
					// 				setTimeout(function(){
					// 					uni.navigateBack()
					// 				},1000)
					// 			}else{
					// 				global.showToast('提交失败')
					// 			}
					// 		}).catch(reason =>{
					// 			global.hideLoading()
					// 			global.showToast('请检查网络')
					// 		})
					// 	}
					// }else{
						if(this.isNew){
							this.saveTrouble(this.form,(res) =>{
								if(res==200){
									global.showToast('保存成功')
									// uni.$emit('newTrouble')
									setTimeout(function(){
										uni.navigateBack({delta:2})
									},1000)
								}
							})
						}else{
							this.updateTrouble(this.form,(res) =>{
								if(res==200){
									global.showToast('更新成功')
									// uni.$emit('newTrouble')
									setTimeout(function(){
										uni.navigateBack({delta:2})
									},1000)
								}
							})
						}
						
						// uni.setStorageSync('report'+this.number,this.form)
						// global.showToast('无法连接到网络')
						// uni.$emit('submitResult',{index:this.number,result:0})
						
					// }
				
			},
			loadCollectTypes: function() {
				this.$api.getCategory('collector_type', 0).then(res => {
					let [error, data] = res;
					if (error != null) {
						return;
					}
					let all_items = data.data

					for (let key in all_items) {
						this.items.push({
							value: key,
							name: all_items[key]
						})
					}
				});
			},
			bindSexChange: function(e) {
				this.indexSex = e.target.value
			},
			bindOldChange: function(e) {
				this.indexOld = e.target.value
			},
			wxscan(data) {
				let vm = this;
				wx.config(data);
				wx.ready(function() {
					wx.scanQRCode({
						needResult: 1,
						scanType: ["qrCode", "barCode"],
						success: function(res) {
							var result = res.resultStr;
							var code = result.split(',')[1];
							if (vm.buyer_collector.length == 0) {
								vm.buyer_collector = code;
							} else {
								var temp_arr = vm.buyer_collector.split(',');
								if (!temp_arr.includes(code)) {
									vm.buyer_collector += ',' + code;
								}
							}
						}
					});
				});
			},
			switchActive(index) {
				this.activeIndex = index
				setTimeout(() => {
					this.activeIndex = -1
				}, 500)
				let data = {
					debug: false,
					json: true,
					apis: 'scanQRCode',
					url: window.location.href.split('#')[0],
				};
				const userToken = JSON.parse(sessionStorage.getItem("userToken"));
				this.$api.getJsSDKConfig(data, userToken).then(res => {
					let [err, data] = res;
					if (err == null) {
						this.wxscan(data.data)
					}
				})
			},
			
			switchChange(e) {
				if (this.price == this.price1) {
					//代表价格
					if (this.userRole == 'representative') {
						this.price = this.price2;
					} else {
						// 顾问价格
						this.price = this.price3;
					}
					this.price_type = 'special_price';
				} else {
					this.price_type = 'common_price';
					this.price = this.price1;
				}
			},
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = e.target.value
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = e.target.value
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
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
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: [ 'compressed'],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
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
							that.uploadImg(res.target)
							
						},function(error) {
							global.showToast('图片压缩失败')
							// alert("Compress error!");
					});
				})
			},
			uploadImg(imgsrc){
				var l=this.imageList.length,that=this
				if(l==0){
					return
				}
				// that.uploading=true
						// if(that.networkEnable()){
						// 	uni.uploadFile({
						// 		// 47.103.152.26:9089   192.168.0.142:8081
						// 		url:request.baseURL+'/hazard/upload',
						// 		filePath:imgsrc,
						// 		// files:fileList,
						// 		name:'file',
						// 		header:{
						// 			'Accept': 'application/json',
						// 			'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
						// 		},
						// 		success:(success) =>{
						// 			console.log(success)
						// 			var res=JSON.parse(success.data)
						// 			if(res.code==200){
						// 				that.uploaded++
						// 				that.tempImgList.push(imgsrc)
						// 				if(that.uploaded<l){
						// 					that.form.pictures+=res.data+','
						// 				}else if(that.uploaded==l){
						// 					that.imageList=that.tempImgList
						// 					that.form.pictures+=res.data
						// 					that.uploading=false
						// 				}
										
						// 			}else{
						// 				global.showToast('图片上传失败')
						// 				that.uploading=false
						// 			}
						// 		},
						// 		fail:(reason) =>{
						// 			that.uploading=false
						// 			global.showToast('请检查网络连接')
						// 		}
						// 	})
						// }else{
								uni.saveFile({
								      tempFilePath: imgsrc,
								      success: function (res) {
								       that.form.pictures.push(res.savedFilePath) 
									   if(that.form.pictures.length==l){
										   that.uploading=false
										   that.imageList=that.form.pictures
										   // uni.setStorageSync('pictures'+that.number,that.offlineImgList)
										   // global.showToast('无法连接到网络')
									   }
								      }
								    });
							
							
						// }
			},
			uploadImgBeforeSubmit(imgs){
				var i=0,l=imgs.length,that=this
				if(l==0){
					return
				}
				that.uploading=true
					imgs.forEach((item,index) =>{
						console.log(item)
						uni.uploadFile({
							// 47.103.152.26:9089   192.168.0.142:8081
							url:request.baseURL+'/hazard/upload',
							filePath:item,
							// files:fileList,
							name:'file',
							header:{
								'Accept': 'application/json',
								'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
							},
							success:(success) =>{
								console.log(success)
								var res=JSON.parse(success.data)
								if(res.code==200){
									i++
									if(i<l){
										that.form.pictures+=res.data+','
									}else if(i==l){
										that.form.pictures+=res.data
										uni.setStorageSync('report'+that.number,that.form)
										that.uploading=false
										that.offline=false
										that.submit()
									}
									
								}
							},
							fail:(reason) =>{
								that.uploading=false
								global.showToast('请检查网络连接')
							}
						})
					})
			},
			upload(e){
				console.log(e)
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
						let hour = date.getHours();
						let minute = date.getMinutes() + 1;
						let second = date.getSeconds();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;
			            day = day > 9 ? day : '0' + day;
						hour = hour > 9 ? hour : '0' + hour;
						minute = minute > 9 ? minute : '0' + minute;
						second = second > 9 ? second : '0' + second;
			            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
			        },
					bindPickerChange(e){
						var that=this
						this.form.index=e.target.value
						that.form.devId=that.devListAll[e.target.value].devId
						// that.devListAll.forEach((item,index) =>{
						// 	if(item.devName==e.target.value){
						// 		that.form.devId=that.devListAll[index].devId
						// 	}
						// })
					},
			bindPickerChange2(e){
				this.date = e.target.value
				this.form.createTime=e.target.value
			},
			imgchange(){
				console.log(this.imageList)
			},
			deleteimg(index){
				console.log(index,this.imageList)
				this.imageList.splice(index,1)
				// this.form.pictures.splice(index,1)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: gainsboro;
		padding-bottom: 100upx;
	}

	

	.yt-list {
		margin-top: 16upx;
		background: #fff;
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
				max-width: 160upx;
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
	.uni-input{
		height: initial;
		padding-left: 0;
	}
	.list-pd{
		padding-bottom: 15px;
	}
	.uni-uploader__input-box{
		background: #f1f4f9;
		border-radius: 10px;
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
