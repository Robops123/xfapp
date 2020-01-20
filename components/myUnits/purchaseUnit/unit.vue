<template>
   <view>
	    <view class='my-unit' v-for='(item,index) in workList' :key='index'>
	   	<view class="unit-head" >
			<image src="/static/img/icon_gd@2x.png" mode=""></image>
	   		<text>工单编号：{{item.orderCode}}</text>
	   	</view>
	   	<view class="unit-body" @click="doHandle(item,index)">
	   		<view>执行人： </view><text>{{item.userName}}</text>
			<view>工作地点： </view><text>{{item.userName}}</text>
			<view>工作内容： </view><text>{{item.remark}}</text>
			<!-- <text   >：</text> -->
	   		<view>派单时间：</view><text>{{item.assignTime}}</text>
			<!-- <text   >：</text> -->
	   		<!-- <view>派工人：</view><text>{{item.maintainName}}</text> -->
			<!-- <text   >：</text> -->
	   		<!-- <view>完成时间：</view><text>{{item.doneTime}}</text> -->
			<!-- <text   >：</text> -->
			<view class="arrow">></view>
	   	</view>
	   	<!-- <view class="unit-foot">
	   		<text class="color-999">任务内容：</text><text class="color-999">{{item.remark}}</text>
			<button class="fr btn" style="float: right;" type="primary" >工单处置</button>
	   		<view> -->
	   			<!-- <button class="fr btn" type="primary" @click="doTransfer">工单流转</button> -->
	   			<!-- <button class="fr btn" type="warn" @click="doDel">删除工单</button> -->
	   		<!-- view>
	   	</view> -->
	   </view>
	   <image src="../../../static/img/icon_gd@2x.png" mode=""></image>
   </view>
</template>
	
<script>
    export default{
		props:['workList'],
        data() {
            return {
				unitModel1:[
					{prop:"",label:"执行人",value:"张三"},
					{prop:"",label:"派工时间",value:"2019-10-10"},
					{prop:"",label:"派工人",class:"color-red",value:"李四"},
					{prop:"",label:"执行地点",class:"color-999",value:"无锡"},
					{prop:"",label:"完成时间",class:"color-999",value:"2019-10-10"},
					{prop:"",label:"最迟时间",class:"color-999",value:"2019-10-10"},
				]
            }
        },
        methods:{
			showOrder(){
				
				// uni.navigateTo({
				// 	url: "/pages/workorder/showOrder"
				// })
			},
			doHandle(it,id){
				uni.$on('handleSubmit',function(){
					uni.$emit('refresh')
					uni.$off('handleSubmit')
				})
				uni.navigateTo({
					url: "/pages/workorder/editOrder?params="+JSON.stringify(it)+"&index="+id+'&type='+this.$parent.orderStatus
				})
			},
			doTransfer(){
				uni.navigateTo({
					url: "/pages/workorder/transferOrder"
				})				
			},
			doDel(){
				this.$store.commit("switch_loading")
			}
        },
		computed:{
			
		},
		created() {
			
		},
    }
</script>
<style lang='scss'>
    .my-unit{
		margin: 20upx 0;
		background-color: #ffffff;
		font-size: 28upx;
		transform: all 1s;
		
		.unit-head{
			padding: 20upx;
			display: flex;
			margin: 10px 0;
			height: 80upx;
			box-sizing: border-box;
			border-bottom: 2upx solid #f5f5f5;
			color: #b9b9b9;
		}
		.unit-body{
			padding: 20upx;
			position: relative;
			flex-wrap: wrap;
			margin-bottom: 10px;
			view{
				display: inline-block;
				width: 25%;
				margin-right: 5%;
				text-align: right;
				color: #666;
			}
			text{
				width: 60%;
				display: inline-block;
				font-size: 28upx;
				line-height: 55upx;
			}
		}
		.unit-foot{
			height: 88upx;
			padding: 0 20upx;
			border-top: 2upx solid #f5f5f5;
			border-bottom: none;
			line-height: 88upx;
			
			.btn{
				float: left;
				height: 60upx;
				font-size: 28upx;
				line-height: 60upx;
				margin: 14upx 30upx;
			}
		}
	}
	image{
		width: 60upx;
		height: 60upx;
		align-self: center;
	}
	.arrow{
		position: absolute;
		right: 5%;
		top: 45%;
		height: 100%;
		align-self: center;
	}
</style>