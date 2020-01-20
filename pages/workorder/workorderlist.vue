<template>
	<view class='purchase-list'>
		<my-tabs @change="tapChange" :modelData="modelData" :initIndex="initIndex"></my-tabs>
		<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower" @scrolltoupper="scrolltoupper" style="height: calc(100vh - 100upx);"
		@scroll="scroll" @touchstart="touchstart" @touchend="touchend">
			<my-unit 
			v-for="(item,index) in 1" :key="index" :info="item" :workList='workList'></my-unit>
		</scroll-view>
		<my-loading></my-loading>
	</view>
</template>
<script>
	import myTabs from '@/components/myTabs/myTabs.vue'
	import myUnit from '@/components/myUnits/purchaseUnit/unit.vue'
	import myPull from '@/static/js/myPull.js'
	import myLoading from '@/components/myLoading/myLoading.vue'
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	export default {
		components:{myTabs,myUnit,myLoading},
		data() {
			return {
				page:1,
				limit:10,
				workList:[],
				total:1,
				orderStatus:2
			}
		},
		onLoad(){
			var that=this
			uni.$on('refresh',function(){
				that.page=1
				that.workList=[]
				that.total=1
				that.orderStatus=2
				that.initIndex=0
				that.getWorkList()
			})
			// this.refresh();
			this.getWorkList()
		},
		methods: {
			/**
			 * @name 获取列表
			 */
			getList(page,done){
				 console.log(`获取第${page}页数据`);
				 done([1])
			},
			getWorkList(){
				var that = this
				var params={
					tenantId:uni.getStorageSync('tenantId'),
					current:this.page,
					size:this.limit,
					orderStatus:this.orderStatus   //1提交   2已接受   3已处理   4一结束
				}
				request.apiGet('/workOrder/maintainOrderList',params).then((res) =>{
					console.log(res)
					if(res.code == 200){
						
						that.workList=that.workList.concat(res.data.records)
						that.total=res.data.total
					}else{
						global.showToast('无法获取工单')
					}
				}).catch(reason =>{
					global.showToast('请检查网络')
				})
			},
			
			/**
			 * @name 触底加载
			 */
			scrolltolower(event){
				this.getList(this.page,this.__pulldone)
			},
			
			scroll(e){
				// 重新设置pulldown
				this.setPullDown(e.detail.scrollTop<10)
			},
			
			scrolltoupper(){
				
			},
			
			
			/**
			 * @name 改变tab
			 * @param val 索引
			 */
			tapChange(val){
				if(val!=this.orderStatus-2){
					this.workList=[]
					this.initIndex=val
					if(val==0){
						this.orderStatus=2
					}else if(val==1){
						this.orderStatus=3
					}else if(val==2){
						this.orderStatus=4
					}
					this.getWorkList()
				}
			}
		},
		mixins:[myPull({})],
		
	}
</script>
<style lang='scss'>
	.purchase-list {
		background-color: #f5f5f5;
		height: 100%;
		overflow: hidden;
		
		.purchase-body{
			height: calc(100% - 88upx);
			overflow: auto
		}
	}
</style>
