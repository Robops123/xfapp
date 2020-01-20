<template>
	<view>
		<!-- <view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">记录编号</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写巡检人姓名" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">巡检人姓名</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写巡检人姓名" placeholder-class="placeholder" />
			</view>
		</view> -->
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">巡检时间</text>
				<text>{{form.startTime}}</text>
			</view>
		</view>
		<view class="yt-list bgwhite">
			<view class="yt-list-cell" style="display: flex;justify-content: space-between;">
				<text class="cell-tit clamp" style="align-self: start;">巡检内容</text>
				<textarea value="" v-model="form.remark" placeholder="输入需要巡检的内容或者注意事项" style="width: calc(100vw - 240upx);height: 60px;display: inline-block;"/>
				<!-- <input class="desc" type="textarea"  placeholder="" placeholder-class="placeholder" /> -->
			</view>
		</view>
		
		<view class="yt-list bgwhite">
			<view class="yt-list-cell desc-cell scanner-picker">
				<text class="clamp" >扫码绑定巡检点:</text>
				<view class="uni-list-cell-db">
				                    <picker @change="bindPickerChange" :value="index" :range="array" mode = selector>
				                        <view class="uni-input">{{array[index]}}</view>
				                    </picker>
				                </view>
				<uni-icons type="scan" :color="nfcEnable ? '#007aff':'#8f8f94'" size="30" @click="scan()" />
			</view>
		</view>
		<text style="padding-left: 40upx;color: #a1a1a1;">支持二维码扫描和NFC扫描切换</text>
		<!-- 受检人信息 -->
		<view class="" style="margin-bottom: 40upx;">
			
			<!-- <uni-collapse accordion="true" v-if="form.xgList && form.xgList.length>0" @change='change'>
			    <uni-collapse-item :title="'巡检点-'+items.pointName"  :key='index'>
					<view class="uni-list list-pd">
						<view class="uni-list-cell cell-pd">
							<view class="uni-uploader">
								<view class="uni-uploader-head"  style="margin-left: 40upx;">
									<view class="uni-uploader-title">操作</view>
									<view class="uni-uploader-info">
										<button type="primary" size='mini' @click="save()" class="mini-btn">保存当前记录</button>
										<button type="primary" size='mini' @click="report(items,index)" class="mini-btn">隐患上报</button>
									</view>
								</view>
								<view>
									<checkbox-group class="uni-list" @change="checkboxChange" >
										巡检项:
									                    <label class="uni-list-cell uni-list-cell-pd" 
														 v-for="(item,index2) in xgItems[index]" :key="item.inspectionItemId">
									                        <view >
									                            <checkbox :value="item.inspectionItemId" :checked="item.checked" ></checkbox>
									                        </view>
									                        <view>{{item.inspectionItemName}}</view>
									                    </label>
									                </checkbox-group>
								</view>
							</view>
						</view>
					</view>
			    </uni-collapse-item>
			</uni-collapse> -->
			
		</view>		
		<view class="" style="padding: 10upx 0;border-top: 1px dashed #dadada;">
			<view class="ml10 mt10 mb10 i-cube"></view><text class="ml30" style="color: #3B4144;">本次巡检结果</text>
		</view>
		<view class="" @click="toTroubleList"
		style="display: flex;justify-content: space-between;padding: 20upx 40upx;background: white;margin: 20upx 0;border-top: 1px solid #e8e7e7;border-bottom: 1px solid #e8e7e7;">
				<text class="c666">隐患记录</text>
			<view class="arrow">
				<text style="margin-right: 20px;height: 90%;background: #eb6315;border-radius: 10px;padding: 5px;color: white;" v-if='total'>{{total}}条</text>>
			</view>
		</view>
		<!-- v-for="(items,index) in form.xgList" -->
		<view class="yt-list xgs" v-for="(items,index) in form.xgList" @click="todetail(index)">
			<view class="top">
				<text class="c666">巡检点：</text><text>{{items.pointName}}</text>
			</view>
			<view>
				<text  class="c666">检查项：</text><text v-if="items.saved">{{items.total}}项</text>
				<text class="offsetright c666" >合格项：</text><text v-if="items.saved">{{items.passed}}项</text>
			</view>
			<view>
				<text class="c666">合格率：</text><text v-if="items.saved">{{items.passedPercentage}}</text>
			</view>
			<view class="arrow">></view>
		</view>
			<!-- <button  @click="clear()">清除记录</button>
			<button  @click="submitxg()">提交</button> -->
		<button class="add-btn" @click="submitxg">提交</button>
		
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
	import UniIcons from '@/components/uni-icon/uni-icon.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import {nfc} from '../../static/js/nfc'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	import {Common} from '../../static/js/Common.js'
	export default {
		mixins:[nfc,Common],
		components: {
			UniIcons,
			uniCollapse,
			uniCollapseItem
		},
		onLoad(){
			var that=this
			this.checkHasBegin()
			if(uni.getStorageSync('scanway')==1){
				this.index=1
				this.checkUfcOpen()
			}
			this.scanListener()
			if(uni.getStorageSync('operation')!=''){
				this.getRecordFromMemory()
			}else{
					console.log('无记录')
				}
				// uni.$on('newTrouble',function(){
				// 	that.findTrouble(uni.getStorageSync('activityId'),'',(res) =>{
				// 		console.log(res.length)
				// 	})
				// })
		},
		onHide(){
			// uni.setStorageSync('checkingRecord',this.form)
		},
		onShow(){
			// if(uni.getStorageSync('checkingRecord')!==''){
			// 	this.form=uni.getStorageSync('checkingRecord')
			// }
			var that=this
				that.findTrouble(uni.getStorageSync('activityId'),null,(res) =>{
					that.total=res.length
					that.$forceUpdate()
				},() =>{
					console.log('错误')
				})
		},
		data() {
			return {
				form:{
					tenantId:uni.getStorageSync('tenantId'),
					xgId:'',
					xgList:[],
					remark:'',
					startTime:'',
					endTime:''
				},
				// 巡检项列表
				xgItems:[],
				errmsg:'',
				formcontent:'',
				ClickedIndex:null,
				nfcEnable:false,
				scanned:false,
				index:0,
				total:0,
				array:['二维码', 'NFC'],
				order_no: '',
				select_item: '',
				price_type: 'common_price',
				product_name: '',
				product_image1: '',
				price: 0,
				price1: 0,
				price2: 0,
				price3: 0,
				activeIndex: -1,
				desc: '',
				index: 0,
				items: [],
				indexSex: 0,
				indexOld: 40,
				seller: '',
				seller_id: 0,
				consultant: '',
				consultant_id: 0,
				consultant_phone: '',
				buyer: '',
				uploaded:0,
				buyer_phone: '',
				buyer_collector: '',
				remark: '',
				imageList: [],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				boxList:[
					{inspectionItemId:"1",inspectionItemName:'aaa'},
					{inspectionItemId:"2",inspectionItemName:'bbb'},
					{inspectionItemId:"3",inspectionItemName:'ccc'},
					{inspectionItemId:"4",inspectionItemName:'ddd'}
				]
			}
		},
		computed: {
			...mapState(['userRole']),
		},
		methods: {
			scan(){
				if(this.index==1){
					this.test_nfc()
				}else{
					this.qrscanner()
				}
			},
			scanListener(){
				var that=this
				this.$on('getv',(v) =>{
					that.scanned=true
					if(that.form.xgList==''){
						// console.log('-------------没设备')
						that.test(v,'nfc',(find) =>{
							that.form.xgList.push({
								id:find.pointId,
								total:find.total,
								pointId:v,
								pointName:find.pointName,
								details:[]
							})
							that.xgItems.push(find.itemTypeList)
							uni.setStorageSync('operation',that.form)
							uni.setStorageSync('xgItems',that.xgItems)
							that.todetail(that.form.xgList.length-1)
						})
					}else{
						// console.log('-----------有设备')
						var newDev=''
						that.form.xgList.forEach((item,se) =>{
							if(item.pointId.toString() === v.toString()){
								// console.log('-----------相同设备,不添加跳出循环')
								that.todetail(se)
								that.$off('getv')
								setTimeout(function(){
									that.scanListener()
								},200)
								throw Error();
							}else{
								newDev=v
							}
						})
						that.test(newDev,'nfc',(find) =>{
							that.form.xgList.push({
								id:find.pointId,
								total:find.total,
								pointId:v,
								pointName:find.pointName,
								details:[]
							})
							that.xgItems.push(find.itemTypeList)
							uni.setStorageSync('operation',that.form)
							uni.setStorageSync('xgItems',that.xgItems)
							that.todetail(that.form.xgList.length-1)
						})
						
						// console.log('----------新设备，添加后跳出循环')
					}
					that.$off('getv')
					setTimeout(function(){
						that.scanListener()
					},200)
				})
			},
			checkboxChange: function(e) {
				this.select_item = e.detail.value;
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
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths[0]);
					}
				})
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
			report(item,index){
				var that=this
				uni.$on('submitResult',function(res){
					console.log(res)
					that.form.xgList[res.index].result=res.result
					uni.setStorageSync('operation',that.form)
					uni.setStorageSync('xgItems',that.xgItems)
					uni.$off('submitResult')
				})
				
					// if(item.result==0){
						uni.navigateTo({
							url: '/pages/startPatrol/report?params='+JSON.stringify(item)+'&index='+index
						})
					// }else{
					// 	uni.navigateTo({
					// 		url: '/pages/startPatrol/report?params='+JSON.stringify(item)
					// 	})
					// }
			},
			// 检查nfc是否打开
			checkUfcOpen(){
				var main = plus.android.runtimeMainActivity();
				var NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');
				var nfcAdapter = NfcAdapter.getDefaultAdapter(main);
				if (!nfcAdapter.isEnabled()) {
					this.nfcEnable=false
				}else{
					this.nfcEnable=true
					this.scan()
				}
			},
			// 扫描二维码
			qrscanner(){
				var that=this
				
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        // console.log('条码类型：' + res.scanType);
				        // console.log('条码内容：' + res.result);
						if(that.form.xgList==''){
							// console.log('-------------没设备')
							that.test(res.result,'qrcode',(find) =>{
								that.form.xgList.push({
									id:find.pointId,
									pointId:res.result,
									total:find.total,
									pointName:find.pointName,
									details:[]
								})
								that.xgItems.push(find.itemTypeList)
								uni.setStorageSync('operation',that.form)
								uni.setStorageSync('xgItems',that.xgItems)
								that.todetail(that.form.xgList.length-1)
							})
							// var find=that.findItems(res.result,'qrcode')
							// console.log('首次添加:----------'+v)
							
						}else{
							// console.log('-----------有设备')
							var newDev=''
							that.form.xgList.forEach((item,se) =>{
								if(item.pointId.toString() === res.result.toString()){
									newDev=''
									// global.showToast('重复')
									that.todetail(se)
									// console.log('-----------相同设备,不添加跳出循环')
									throw Error();
								}else{
									newDev=res.result
								}
							})
							if(newDev!=''){
								that.test(res.result,'qrcode',(find) =>{
									that.form.xgList.push({
										id:find.pointId,
										pointId:res.result,
										total:find.total,
										pointName:find.pointName,
										details:[]
									})
									that.xgItems.push(find.itemTypeList)
									uni.setStorageSync('operation',that.form)
									uni.setStorageSync('xgItems',that.xgItems)
									that.todetail(that.form.xgList.length-1)
								})
							}
							// console.log('----------新设备，添加后跳出循环')
						}
				    },
					fail:(reason =>{
						console.log(reason)
					})
				});
			},
			// 计算合格率
			calcPass(){
				
			},
			// 根据id查找巡检点和项
			findItems(id,type){
				var points=uni.getStorageSync('xjdList')
				var selector=''
				this.test(id,type,(res) =>{
					selector=res
				})
				
				// if(type=='nfc'){
				// 	points.forEach((item,index) =>{
				// 		var eValue=eval('item.nfcId');
				// 		if(eValue==id){
				// 			selector=item
				// 		}
				// 	})
				// }else if(type=='qrcode'){
				// 	points.forEach((item,index) =>{
				// 		var eValue=eval('item.qrCode');
				// 		if(eValue==id){
				// 			selector=item
				// 		}
				// 	})
				// }
				return selector
			},
			getCbIndex(item,index){
				console.log(item)
				console.log(index)
				
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
						let hours=date.getHours()
						let minutes=date.getMinutes()
						let secondes=date.getSeconds()
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
						hours = hours > 9 ? hours : '0' + hours;
						minutes = minutes > 9 ? minutes : '0' + minutes;
						secondes = secondes > 9 ? secondes : '0' + secondes;
			            return `${year}-${month}-${day} ${hours}:${minutes}:${secondes}`;
			        },
			checkboxChange(e){
			var	values = e.detail.value   //数组
			var choosed=[]
			this.form.xgList[this.ClickedIndex].itemId=values
			
			},
			// 选择扫描方式
			bindPickerChange(e){
				this.index = e.target.value
			},
			change(e){
				// console.log(e)
				this.ClickedIndex=parseInt(e)
			},
			// 保存当前的所有操作
			save(){
				global.showLoading()
				uni.setStorageSync('xgItems',this.xgItems)
				uni.setStorageSync('operation',this.form)
				global.hideLoading()
				global.showToast("当前记录保存成功")
			},
			// 是否开始巡检
			checkHasBegin(){
				var activityId=uni.getStorageSync('activityId')
				if(activityId==''){
					// 刚开始
					let newId=this.guid()
					this.form.startTime=this.getDate({
			            format: true
			        })
					uni.setStorageSync('activityId',newId)
					this.form.xgId=newId
					uni.setStorageSync('operation',this.form)
					console.log(this.form.xgId)
				}else{
					
					this.form.xgId=uni.getStorageSync('activityId')
					console.log(this.form.xgId)
				}
			},
			getRecordFromMemory(){
					var that=this
					this.form=uni.getStorageSync('operation')
					if(this.form.finish==1){
						global.showToast('请在巡检记录中提交上次记录')
						uni.navigateBack({
							delta:1
						})
						return
					}
					if(uni.getStorageSync('xgItems')!=''){
						this.xgItems=uni.getStorageSync('xgItems')
						this.form.xgList.forEach((item,index) =>{
							if(item.itemId.length==0){
								that.xgItems[index].forEach((item3,index3) =>{
										item3.checked=false
								})
							}else{
								item.itemId.forEach((item2,index2) =>{
									that.xgItems[index].forEach((item3,index3) =>{
										if((item3.inspectionItemId==item2) || (item3.inspectionItemId==null && item2=='')){
											item3.checked=true
										}else{
											item3.checked=false
										}
									})
								})
							}
						})
					}
			},
			clear(){
				uni.clearStorageSync()
			},
			toTroubleList(){
				if(this.total){
					uni.navigateTo({
						url: '/pages/hidTrouble/hidTroubleList?editable=true'
					})
				}
				
			},
			todetail(index){
				var that=this
				var passed=0
				uni.$on('saveComplete',function(index){
					that.xgItems=uni.getStorageSync('xgItems')
					var details=[]
					that.xgItems[index].forEach((items) =>{
						items.itemList.forEach((item,p) =>{
							if(item.value==0){
								passed++
							}
							details.push({
								id:item.itemId,
								value:item.value
							})
						})
					})
					that.form.xgList[index].details=details
					that.form.xgList[index].saved=true
					that.form.xgList[index].total=details.length
					that.form.xgList[index].passed=passed
					that.form.xgList[index].passedPercentage=that.toPercent((passed/that.form.xgList[index].total))
					uni.setStorageSync('operation',that.form)
					uni.$off('saveComplete')
				})
				uni.navigateTo({
					url: '/pages/startPatrol/patrolDetail?index='+index+'&name='+that.form.xgList[index].pointName
				})
			},
			toPercent(point){
			    var str=Number(point*100).toFixed(1);
			    str+="%";
			    return str;
			},
			submit(){
				console.log(this.form)
			},
			submitxg(){
				var that = this
				uni.showModal({
				    title: '确定提交本次巡检内容',
				    content: '提交后无法更改',
					cancelText:'我再想想',
					confirmText:'确定提交',
				    success: function (res) {
				        if (res.confirm) {
							var p=true
							that.form.xgList.forEach((item) =>{
								if(!item.saved){
									console.log('没保存')
									p=false
								}
							})
							if(!p){
								global.hideLoading()
								global.showToast('请先确认巡检项')
								return 
							}else{
								that.form.endTime=that.getDate({
								    format: true
								})
								if(that.networkEnable()){
									console.log('enable')
									global.showLoading()
									that.submitTrouble()
								}else{
									that.form.finish=1
									uni.setStorageSync('operation',that.form)
									global.showToast('网络不可用')
									setTimeout(function(){
																 uni.navigateBack({
																 	delta:1
																 })
									},1000)
								}
							}
							
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				// uni.request({
				// 	url:'http://192.168.0.142:8081/check/add/',
				// 	method :"POST",
				// 	header:{
				// 		'Accept': 'application/json',
				// 		'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
				// 	},
				// 	data:this.form,
				// 	success(res) {
				// 		console.log(res)
				// 	},
				// 	fail(err) {
				// 		global.hideLoading()
				// 		reject(err)
				// 	}
				// })
				// uni.setStorageSync('operation',this.form)
				// request.apiPost('/check/add/',this.form).then((res) =>{
				// 	console.log(res)
				// 	if(res.code == 200){
						
				// 	}
				// })
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
		},
		watch:{
			index(n,o){
				uni.setStorageSync('scanway',n)
				if(n==1){
					this.checkUfcOpen()
				}else if(n==0){
					this.nfcEnable=false
					this.$off('getv')
				}
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
		border-top: 1px solid #e8e7e7;
		border-bottom: 1px solid #e8e7e7;
		margin-top: 16upx;
		background: #f4f0f0;
	}
	.uni-input{
		background: #f4f0f0;
	}
	.uni-uploader-title{
		line-height: 2.3;
	}
	.mini-btn{
		margin-right: 10px;
	}
	.uni-uploader-head{
		margin: 10px 0;
	}
	.uni-uploader-body textarea{
		width: 90%;
		margin: 0 auto;
	}
	.scanner-picker .uni-input{
		height: auto;
		text-align: right;
		padding-right: 80upx;
		line-height: auto;
	}
	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		// line-height: 70upx;
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
	.uni-list-cell {
	    justify-content: flex-start
	}
	uni-textarea{
		font-size: 13px !important;
	}
	body{
		background: #f0efef;
	}
	.xgs{
		padding: 10upx 30upx 10upx 40upx;
		position: relative;
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
		top: 45%;
	}
	.xgs .c666{
		color: #666;
	}
	.i-cube {
		width: 12upx;
		height: 45upx;
		background-color: #5295f9;
		    display: inline-block;
		    vertical-align: bottom;
		    margin: 0 20upx;
	}
	.bgwhite,.uni-input{
		background: white;
		}
</style>
