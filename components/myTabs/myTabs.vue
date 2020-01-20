<template>
	<view :class="{'my-tabs':true,'space-between':formatBe}">
		<view>
			<view  v-for="(item,index) in getModelData" :key="index" :class="{'tab-item':true,'active':formatIndex==index}" @tap="tap(index)">
				{{item.label}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['modelData','initIndex'],
		data() {
			return {
				
			}
		},
		computed:{
			getModelData(){
				return this.modelData
			},
			formatBe(){
				return this.modelData
						?this.modelData.length>4?true:false
						:false
			},
			formatIndex(){
				return this.initIndex
			}
		},
		methods: {
			tap(index){
				// console.log("我点击了",index);
				this.$emit("change",index);
			}
		}
	}
</script>
<style lang='scss'>
	.my-tabs {
		/* background-color: #ffffff; */
		/* height: 88upx; */
		font-size: 28upx;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
		border-top: 2upx solid #dddddd;
		border-bottom: 2upx solid #dddddd;
		min-width: 100%;
		overflow-x: auto;
		
		.tab-item{
			line-height: 48upx;
			padding: 20upx 40upx;
			min-width: 100upx;
			text-align: center;
			display: inline-block;
			background: #d9dbe0;
			margin: 10px 0;
		}
		.tab-item:nth-of-type(1){
			border-radius: 10px 0 0 10px;
		}
		.tab-item:nth-of-type(2){
			border-radius:  0 10px 10px 0 ;
		}
		.tab-item.active{
			position: relative;
			color: white;
			background: #4f82f8;
		}
		.tab-item.active::after{
			content: "";
			position: absolute;
			bottom: 0;
			left:50%;
			transform: translateX(-50%);
			width: 100%;
			/* border-bottom: 4upx solid #3682FF; */
		}
	}
	.my-tabs.space-between{
		justify-content: space-between;
	}
	@keyframes test{
		0%{width: 100%}
		50%{width: 150%}
		100%{width: 100%}
	}
</style>
