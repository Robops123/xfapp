<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<!-- <view class="mp-search-box">
			<input class="ser-input" type="text" value="" disabled />
		</view> -->
		<!-- #endif -->
		
		<!-- 头部轮播 -->
		<!-- <view class="carousel-section">
			<view class="titleNview-placing"></view>
		</view> -->
		<view>
			<!-- <view class="title uni-text-gray fl-row">
				<view class="ml10 mt10 mb10 i-cube"></view><text class="ml30">业务功能</text>
			</view> -->
			<zy-grid :showTip="true" :col="4"></zy-grid>
		</view>
		<view class="progress-box" v-if="loading">
			<view>资源正在加载，请稍后...</view>
		                <progress :percent="percent" show-info  />
		            </view>
		<!-- <view class="title uni-text-gray fl-row">
			<view class="ml10 mt10 mb10 i-cube"></view><text class="ml30">告警列表</text>
		</view>
		<view>
			<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower1" style="max-height: calc(100vh - 500upx);">
				<view class="list b-b" v-for="(item, index) in warnList" :key="index">
					<view class="wrapper">
						<view class="address-box">
							<text class="address">告警设备: ({{item.devTypeName}}) {{item.devName}}</text>
						</view>
						<view class="address-box">
							<text class="address">告警类型: {{item.warnTypeName}}</text>
							<text class="address">告警状态: {{item.warnStatus}}</text>
						</view>
						<view class="u-box">
							<text class="mobile">告警时间: {{item.warnDate}}</text>
						</view>
					</view>
				</view>
				</scroll-view>
		</view> -->
		<!-- <view class="title uni-text-gray fl-row">
			<view class="ml10 mt10 mb10 i-cube"></view><text class="ml30">问题列表</text>
		</view> -->
		<!-- <view class="grid-title">
			<view></view>
			<text>统计信息</text>
		</view> -->
		<!-- <block v-for="(item, index) in arr" :key="index">
			<view v-if="item.group" class="title uni-text-gray fl-row">
				<view class="ml10 mt10 mb10 i-cube"></view><text class="ml30">{{item.group}}</text>
			</view>
			<view class="bgwh qiun-title-bar tc" >
				<view class="f30 g6">{{item.title}}</view>
			</view>
			<view class="bgwh">
				<uCharts :scroll="item.opts.enableScroll" :show="canvas" :canvasId="item.id" :chartType="item.chartType" :extraType="item.extraType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
			</view>
		</block> -->
		<!-- <button @click="cleardb">清空数据库</button>
		<button @click="find">查询</button> -->
	</view>
</template>

<script>
	import zyGrid from '../../components/zy-grid/zy-grid.vue'
	import uCharts from '@/components/u-charts/u-charts.vue';
	import crt from '@/components/u-charts/js/chartsUtil.js';
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	import {Common} from '../../static/js/Common.js'
	export default {
		mixins:[Common],
		components:{
			zyGrid,uCharts
		},
		data() {
			return {
				canvas: true,
				cWidth:'',
				cHeight:'',
				arr: [],
				page1:1,
				limit1:10,
				warnList:[],
				warnListTotal:1,
				page2:1,
				limit2:10,
				total:0,
				loading:false,
				percent:0,
				loaded:0
			};
		},

		onLoad(e) {
			var that=this
			// this.getDevList()
			// this.getList()
			// this.openDB()
			// this.getWarnList()
			// this.getItemCount(4,(res) =>{
			// 	console.log(res)
			// })
			this.getVersion()
			// this.init()
		},
		// watch:{
		// 	loaded(n,o){
		// 		var that=this
				
		// 		console.log(this.percent)
		// 		// if(this.percent==100){
		// 		// 	this.loading=false
		// 		// }
		// 		uni.$on('resourceAdd',function(){
		// 			that.loaded++
		// 			uni.$off('resourceAdd')
		// 		})
		// 	}
		// },
		methods: {
			canIUseDatabase(){
				
			},
			progressListener(){
				var that=this
				uni.$on('resourceAdd',function(){
					that.loading=true
					that.loaded++
					that.percent=parseInt((that.loaded/that.total) * 100)
					if(that.percent==100){
						console.log('读完了')
						that.loading=false
					}
					uni.$off('resourceAdd',function(){
						that.progressListener()
					})
				})
			},
			find(){
				this.test('4')
				},
			cleardb(){
				var is=plus.sqlite.isOpenDatabase({name:'first',path:'_doc/test.db'});
				var that=this
				console.log(is)
				if(!is){
					plus.sqlite.openDatabase({
							name: 'first',
							path: '_doc/test.db',
							success: function(e){
								plus.sqlite.executeSql({
												name: 'first',
												sql: "DROP TABLE fp_inspection_item",
												success: function(e){
													console.log('删除成功');
													plus.sqlite.executeSql({
																	name: 'first',
																	sql: "DROP TABLE fp_inspectionPoint_Item",
																	success: function(e){
																		console.log('删除成功');
																		plus.sqlite.executeSql({
																						name: 'first',
																						sql: "DROP TABLE fp_inspection_point",
																						success: function(e){
																							console.log('删除成功');
																							plus.sqlite.executeSql({
																											name: 'first',
																											sql: "DROP TABLE fp_trouble_record;",
																											success: function(e){
																												console.log('删除成功');
																											},
																											fail: function(e){
																												console.log('executeSql failed: '+JSON.stringify(e));
																											}
																										});
																						},
																						fail: function(e){
																							console.log('executeSql failed: '+JSON.stringify(e));
																						}
																					});
																	},
																	fail: function(e){
																		console.log('executeSql failed: '+JSON.stringify(e));
																	}
																});
												},
												fail: function(e){
													console.log('executeSql failed: '+JSON.stringify(e));
												}
											});
							},
							fail: function(e){
								console.log('openDatabase failed: '+JSON.stringify(e));
							}
						});
				}else{
					plus.sqlite.executeSql({
									name: 'first',
									sql: "DROP TABLE fp_inspection_item",
									success: function(e){
										console.log('删除成功');
										plus.sqlite.executeSql({
														name: 'first',
														sql: "DROP TABLE fp_inspectionPoint_Item",
														success: function(e){
															console.log('删除成功');
															plus.sqlite.executeSql({
																			name: 'first',
																			sql: "DROP TABLE fp_inspection_point",
																			success: function(e){
																				console.log('删除成功');
																				plus.sqlite.executeSql({
																								name: 'first',
																								sql: "DROP TABLE fp_trouble_record;",
																								success: function(e){
																									console.log('删除成功');
																								},
																								fail: function(e){
																									console.log('executeSql failed: '+JSON.stringify(e));
																								}
																							});
																			},
																			fail: function(e){
																				console.log('executeSql failed: '+JSON.stringify(e));
																			}
																		});
														},
														fail: function(e){
															console.log('executeSql failed: '+JSON.stringify(e));
														}
													});
									},
									fail: function(e){
										console.log('executeSql failed: '+JSON.stringify(e));
									}
								});
				}
			},
				init(){
					this.cWidth=uni.upx2px(750);
					this.cHeight=uni.upx2px(400);
					this.getServerData();
				},
				// 获取巡检点版本号
				getVersion(){
					var that=this
					var param = { 
						tenantId:uni.getStorageSync('tenantId'),
					}
					global.showLoading()
					request.apiGet('/inspectionPointApp/edition',param).then((res) =>{
						if(res.code == 200){
							if(res.data!=uni.getStorageSync('version')){
								uni.setStorageSync('version',res.data)
								this.getList()
							}else{
								global.hideLoading()
								that.checkOpen()
								console.log('版本相同')
							}
							
						}else{
							global.showToast('版本号获取失败')
						}
					}).catch(reason =>{
						global.showToast(reason)
					})
				},
				//获取巡检点列表
				getList(){
					var that=this
					var param = { 
						tenantId:uni.getStorageSync('tenantId'),
					}
					request.apiGet('/inspectionPointApp/allBaseData',param).then((res) =>{
						if(res.code == 200){
							that.total=res.data.pointItems.length+res.data.items.length+res.data.points.length
							that.progressListener()
							// this.$forceUpdate()
							that.openDB(res.data.points,res.data.items,res.data.pointItems)
							// uni.setStorageSync('xjdList',res.data)
							global.hideLoading()
						}else{
							uni.setStorageSync('version',null)
							global.hideLoading()
							global.showToast('获取巡检点列表失败')
						}
					}).catch(reason =>{
						console.log(reason)
						global.hideLoading()
						global.showToast(JSON.stringify(reason))
					})
				},
				// 设备列表
				getDevList(){
						var that = this
						var params={
							tenantId:uni.getStorageSync('tenantId')
						}
						request.apiGet('/check/deviceList',params).then((res) =>{
							if(res.code == 200){
								var devList=[]
								uni.setStorageSync('devListAll',res.data)
								// that.form.devId=res.data[0].devId
								res.data.forEach((item) =>{
									devList.push(item.devName)
								})
								uni.setStorageSync('devList',devList)
							}else{
								global.showToast('无法获取设备')
							}
						}).catch(reason =>{
							global.hideLoading()
							global.showToast('请检查网络')
						})
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
				// 告警列表分页
				scrolltolower1(){
					console.log(this.warnList.length,)
					if(this.warnList.length<this.warnListTotal){
						this.page1++
						this.getWarnList()
					}
				},
				change(idx,type,etype){
					this.$refs[this.arr[idx].id][0].changeData(this.arr[idx].id,this.arr[idx].opts,type,etype)
				},
				async findFamilyQYByList() {
					var data={
						loading: true,
						url:this.HostURL + this.serviceSRV,
						data:{
							p_service: 'familySjService',
							p_method: 'findFamilyQYByTotalList',
							startTime: this.startTime,
							endTime: this.endTime,
							regcodes: this.divisionCode[0],
							pageNo: 1, // 1-第几页
							pageSize: 10, // 10-每页记录条数
							token: this.token,
						}
					}
					var res=await this.$api.get(data)
					var result=this.$api.ErrTip(res)
					if (result&&result.list) {
						var Column={type:'column',categories:[],series:[{name:'户数',data:[]}]}//柱状图
						result.list.forEach((e)=>{
							if(e.name&&e.cnt){
								Column.categories.push(e.name);
								Column.series[0].data.push(e.cnt);
							}
						})
						this.$refs[this.arr[2].id][0].changeData(this.arr[2].id,Column,'column','group')
					}
				},
				async getServerData() {
					var sample=crt.getSampleData()
					// var data={loading: true,url:'https://www.ucharts.cn/data.json'}
					// var res=await this.$api.get(data)
					// var result=this.$api.ErrTip(res)
					// if (result&&result.data) {
						var LineA = { enableScroll:false}
						LineA.categories = sample.LineA.categories//result.data.LineA.categories
						LineA.series = sample.LineA.series//result.data.LineA.series
						var LineB={rotate:false, enableScroll:false}
						// LineB.extra={line:{width:10}}
						LineB.categories = sample.LineB.categories//result.data.LineB.categories
						LineB.series = sample.LineB.series//result.data.LineB.series
						var Column={ enableScroll:false }
						Column.categories = sample.ColumnB.categories//result.data.ColumnB.categories
						Column.series = sample.ColumnB.series//result.data.ColumnB.series
						var ColumnMeter = { enableScroll:false, unit: '' }
						ColumnMeter.categories = sample.ColumnMeter.categories//result.data.ColumnMeter.categories
						ColumnMeter.series = sample.ColumnMeter.series//result.data.ColumnMeter.series
						var serverData = [{
							group:'工单执行情况分析',
							title:'工单月度执行情况分析',
							btn:[{title:'折线图',type:'line',etype:'straight'},{title:'柱状图',type:'column',etype:'group'},
							{title:'区域图',type:'area',etype:'curve'},],
							opts: LineA,
							chartType: "line",
							extraType: "default",
							id: "c0"
						}, {
							title:'工单月度执行情况分析',
							btn:[{title:'折线图',type:'line',etype:'straight'},{title:'柱状图',type:'column',etype:'group'},{title:'区域图',type:'area',etype:'curve'},],
							opts: Column,
							chartType: "column",
							extraType: "group",
							id: "c1"
						}, {
							group:'故障上报情况分析',
							title:'故障上报月度情况分析',
							opts: ColumnMeter,
							chartType: "column",
							extraType: "meter",
							id: "c2"
						}, {
							title:'隐患上报月度情况分析',
							opts: LineB,
							chartType: "line",
							extraType: "curve",
							id: "c3"
						}, {
							group:'巡检记录情况分析',
							title:'巡检记录月度情况分析',
							btn:[{title:'饼状图',type:'pie'},{title:'圆环图',type:'ring'}],
							opts: sample.Pie,//result.data.Pie,
							chartType: "pie",
							id: "c5"
						}];
						this.arr = serverData;
					// 	return
					// }
					// this.$api.tip("网络错误，小程序端请检查合法域名");
				},
				//点击导航栏 buttons 时触发
				onNavigationBarButtonTap(e) {
					const index = e.index;
					if (index === 0) {
						//this.$api.msg('点击了登陆');
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				}
			}
		}
</script>

<style lang="scss">
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;
		background-color:#F0AD4E;
		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 38px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.grid-title{
		display: flex;
		align-items: center;
		font-size: 32upx;
		color: rgba(0,0,0,.63);
		padding: 30upx 0;
		view{
			width: 8upx;
			height: 30upx;
			background-color: rgba(255,82,65,1);
			margin-right: 20upx;
		}
	}
	
	.fl-row { display: flex; flex-direction: row; }
	.bgwh { background-color: #FFFFFF; }/*白色*/
	.g6 { color: #666; }/*浅黑*/
	.tc { text-align: center; }
	.f30 { font-size: 30upx; }
	.p10{ padding: 10upx; }
	.mt10{margin-top: 10upx;}
	.mb10{margin-bottom: 10upx;}
	.ml10{margin-left: 10upx;}
	.mr10{margin-right: 10upx;}
	
	.qiun-title-bar{
		width:96%; 
		padding:10upx 2%; 
		flex-wrap:nowrap;
	}
	
	
	.container {
		box-sizing: border-box;
		height: 100%;
		background-color: #efeff4;
		position: relative;
	}
	
	.content {
		width: 750upx;
		height: calc(100% - 100upx);
		background-color: #efeff4;
	}
	.title {
		line-height: 80upx;
		background-color: #eee;
		text-indent: 20upx;
		font-size: 30upx;
		color: #000000;
		letter-spacing: 1px;
	}
	.i-cube {
		width: 12upx;
		height: 60upx;
		background-color: rgba(255,82,65,1);
		margin-right: 20upx;
	}
	
	.s-btn {
		font-size: 28upx;
		background-color: transparent;
		color: #f6a121;
		line-height: 1.8;
		height: 48upx;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	.s-btn:after {
		border: 2upx solid #8799A3;
	}
	.s-btn-hover {
		background-color: #f6a121;
		color: #FFFFFF;
	}
	
	.s-btn1 {
		font-size: 28upx;
		background-color: transparent;
		color: #f6a121;
		line-height: 1.8;
		height: 48upx;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	.s-btn1:after {
		border: 2upx solid #8799A3;
	}
	.s-btn1-hover {
		background-color: #007AFF;
		color: #FFFFFF;
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
		justify-content: space-between;
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
	.progress-box{
		top: 40%;
		left: 10%;
		width: 80%;
		padding: 10px;
		background: white;
		box-shadow: 1px 1px 6px 0px #3C3C3C;
		border-radius: 8px;
		position: absolute;
	}
</style>
