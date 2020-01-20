<template>
	<view>
		<!-- <view class="grid-title">
			<view></view>
			<text>业务功能</text>
		</view> -->
		<view class="start-patrol" @click="topatrol">
			<image src="../../static/img/ksxc.png" mode=""></image>
			<text>巡检开始</text>
		</view>
		<view class="grid">
			<template v-if="col == 3">
				<view class="grid-item-3" v-for="(item, index) in gridList" :key="index" @click="gridClick(item, index)">
					<image :src="item.imgUrl" mode=""></image>
					<view v-text="item.name"></view>
					<text v-if="showTip && item.tips" v-text="item.tips"></text>
				</view>
			</template>
			<template v-else-if="col == 4">
				<view class="grid-item-4" v-for="(item, index) in gridList" :key="index" @click="gridClick(item, index)">
					<view >
						<image :src="item.imgUrl" mode=""></image>
						<text v-text="item.name" class="larger-text"></text>
					</view>
					<view>
						<text v-if="showTip && item.tips" v-text="item.tips"></text>
						<text>></text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'zy-grid',
		props: {
			col: {	//每行显示格子数，支持每行3个或4个(默认为3)
				type: Number,
				value: 3
			},
			showTip: {	//格子菜单的数字角标(默认显示)
				type: Boolean,
				value: true
			}
		},
		data () {
			return {
				gridList: [	//格子数据列表
					// {
					// 	name: '工单列表',
					// 	imgUrl: '../../static/zy-grid/grid-01.svg',
					// 	tips: '19',
					// 	rote:'/pages/workorder/workorderlist'
					// },
// 					{
// 						name: '开始巡检',
// 						imgUrl: '../../static/zy-grid/grid-05.svg',
// 						tips: '',
// 						rote:'/pages/startPatrol/startPatrol'
// 					},
					{
						name: '巡检记录',
						imgUrl: '../../static/img/xcjl.png',
						tips: '巡检记录随时查',
						rote:'/pages/startPatrol/startPatrolList'
					},
					{
						name: '隐患上报',
						imgUrl: '../../static/img/yhsb.png',
						tips: '发现隐患随手报',
						rote:'/pages/hidTrouble/hidTroubleList?p=asd&s=dsds'
					},
					{
						name: '告警信息',
						imgUrl: '../../static/img/gj.png',
						tips: '随时查看告警情况',
						rote:'/pages/message/message?p=asd&s=dsds'
					}
// 					{
// 						name: '签到',
// 						imgUrl: '../../static/zy-grid/grid-02.svg',
// 						tips: '',
// 						rote:'/pages/signIn/signIn'
// 					},
					// {
					// 	name: '远程消音',
					// 	imgUrl: '../../static/zy-grid/grid-03.svg',
					// 	tips: '',
					// 	rote:'/pages/remoteSilencer/remoteSilencer'
					// },
					// {
					// 	name: '消息提醒	',
					// 	imgUrl: '../../static/zy-grid/grid-04.svg',
					// 	tips: '10',
					// 	rote:'/pages/message/message'
					// },
					// {
					// 	name: '故障上报',
					// 	imgUrl: '../../static/zy-grid/grid-07.svg',
					// 	tips: '',
					// 	rote:'/pages/faultReport/faultReportList'
					// },
					
				]
			}
		},
		methods:{
			gridClick (item, index) {	//格子菜单点击事件
				uni.navigateTo({
					url: item.rote
				})
			},
			topatrol(){
				uni.navigateTo({
					url: '/pages/startPatrol/startPatrol'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
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
	.grid{
		// display: flex;
		align-items: center;
		flex-wrap: wrap;
		border-top: 2upx solid rgba(172,172,172,.2);
		.grid-item-3,.grid-item-4{
			box-sizing: border-box;
			    // width: 42%;
				display: flex;
				justify-content: space-between;
			    margin: 10px 3% 5px 3%;
			    background: #f2f6f7;
			    border-radius: 8px;
			    border: 1px solid rgba(172, 172, 172, 0.2);
			    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
			    /* border-right: 1px solid rgba(172, 172, 172, 0.2); */
			    text-align: center;
			    padding: 10px ;
			    position: relative;
			image{
				width: 100upx;
				height: 100upx;
			}
			view{
				font-size: 28upx;
				margin-top: 16upx;
				display: flex;
				color: rgba(0,0,0,.53);
			}
			.larger-text{
				font-size: 14px;
				margin-left: 26upx;
				color: black;
			}
			text{
				// display: block;
				padding: 4upx 8upx;
				line-height: 100upx;
				text-align: center;
				border-radius: 36upx;
				font-size: 24upx;
				// background-color: rgba(255,82,65,1);
				color: #696a6c;
				// position: absolute;
// 				right: 6upx;
// 				top: 6upx;
			}
		}
		.grid-item-3:nth-child(3n + 3),.grid-item-4:nth-child(4n + 4){
			// border-right: none;
		}
		.grid-item-4{
			// width: calc(100% / 3);
		}
	}
	.start-patrol{
		width: 300upx;
		height: 300upx;
		border-radius: 50%;
		margin: 10px auto;
		background-size: 100%;
		
		position: relative;
		
		// background: url('../../static/img/ksxc.png');
	}
	.start-patrol image{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.start-patrol text{
		display: block;
		line-height: 480upx;
		font-size: 13px;
		color: white;
		text-align: center;
		z-index: 99;
		position: relative;
	}
</style>
