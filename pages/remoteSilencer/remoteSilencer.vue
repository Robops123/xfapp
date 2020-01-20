<template>
	<view class="index" v-bind:style="[{'min-height': secondHeight + 'px' }]">
		<!-- 筛选组件调用 -->
		<mSearch :mode="2" button="inside" @search="search($event)"></mSearch>
		<!-- 数据列表 -->
		<view class="list-box">
			<view style="margin-top: 90upx;"></view>
			<view class="container_of_slide" v-for="(item,index) in list" :key="index">
				<view class="slide_list" @touchstart="touchStart($event,index)" @touchend="touchEnd($event,index)" @touchmove="touchMove($event,index)"
				 @tap="recover(index)" :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
					<view class="now-message-info" hover-class="uni-list-cell-hover" :style="{width:Screen_width+'px'}" @click="getDetail(item)">
						<view class="icon-circle">{{item.surname}}</view>
						<view class="list-right">
							<view class="list-title" v-if="item.name">{{item.name}}</view>
							<view class="list-detail">{{item.remarks}}</view>
						</view>
						<view class="list-right-1">
							{{item.dateTime}}
						</view>
					</view>
					<view class="group-btn">
						<view class="removeM btn-div" @tap="removeM(index, item.id)">
							消音
						</view>
					</view>
					<view style="clear:both"></view>
				</view>
			</view>
		</view>			
	</view>
</template>

<script>
	import mSearch from '../../components/m-search/m-search.vue'

	export default {
		components: {
			mSearch
		},
		name: 'slide-list',
		computed: {
			Screen_width() {
				return uni.getSystemInfoSync().windowWidth;
			}
		},
		data() {
			return {
				img: '../../static/slide-list/qr_code.png',
				visible: false,
				start_slide_x: 0,
				btnWidth: 0,
				startX: 0,
				LastX: 0,
				startTime: 0,
				screenName: '',
				list : [
					{
						id: 1,
						name: '消防警报设备',
						dateTime: 'wx1000211',
						remarks: '无锡市梁溪区天天大厦4F',
						isShare: true,
						slide_x: 0
					},
					{
						id: 2,
						name: '消防警报设备',
						dateTime: 'wx1000212',
						remarks: '无锡市梁溪区天天大厦4F',
						isShare: true,
						slide_x: 0
					},
					{
						id: 3,
						name: '消防警报设备',
						dateTime: 'wx1000213',
						remarks: '无锡市梁溪区天天大厦4F',
						isShare: true,
						slide_x: 0
					},
					{
						id: 4,
						name: '消防警报设备',
						dateTime: 'wx1000214',
						remarks: '无锡市梁溪区天天大厦4F',
						isShare: true,
						slide_x: 0
					}
				],
				btuBottom: '0',
				secondHeight: ''
			};
		},
		onShow() {
			const res = uni.getSystemInfoSync();
			// 计算主体部分高度,单位为px
			this.secondHeight = res.windowHeight
		},
		methods: {
			cancelEvent(){
				this.visible = false
			},
			search(e, val) {
				this.screenName = e
				console.log('点击搜索')
			},
			addCustomer(){
				console.log('点击添加按钮')
			},
			getDetail(item){
				console.log('查看详情')
			},
			// 滑动开始
			touchStart(e, index) {
				//记录手指放上去的时间
				this.startTime = e.timeStamp;
				//记录滑块的初始位置
				this.start_slide_x = this.list[index].slide_x;
				// 按钮宽度
				uni.createSelectorQuery()
					.selectAll('.group-btn')
					.boundingClientRect()
					.exec(res => {
						if (res[0] != null) {
							this.btnWidth = res[0][index].width * -1;
						}
					});
				// 记录上一次开始时手指所处位置
				this.startX = e.touches[0].pageX;
				// 记录上一次手指位置
				this.lastX = this.startX;
				//初始化非当前滑动消息列的位置
				this.list.forEach((item, eq) => {
					if (eq !== index) {
						item.slide_x = 0;
					}
				});
			},
			// 滑动中
			touchMove(e, index) {
				const endX = e.touches[0].pageX;
				const distance = endX - this.lastX;
				// 预测滑块所处位置
				const duang = this.list[index].slide_x + distance;
				// 如果在可行区域内
				if (duang <= 0 && duang >= this.btnWidth) {
					this.list[index].slide_x = duang;
				}
				// 此处手指所处位置将成为下次手指移动时的上一次位置
				this.lastX = endX;
			},
			// 滑动结束
			touchEnd(e, index) {
				let distance = 10;
				const endTime = e.timeStamp;
				const x_end_distance = this.startX - this.lastX;
				if (Math.abs(endTime - this.startTime) > 200) {
					distance = this.btnWidth / -2;
				}
				// 判断手指最终位置与手指开始位置的位置差距
				if (x_end_distance > distance) {
					this.list[index].slide_x = this.btnWidth;
				} else if (x_end_distance < distance * -1) {
					this.list[index].slide_x = 0;
				} else {
					this.list[index].slide_x = this.start_slide_x;
				}
			},
			// 点击回复原状
			recover(index) {
				this.list[index].slide_x = 0;
			},
			
			// 消音
			removeM(index, id) {
				let self = this
				console.log('点击消音')
				uni.showModal({
					title: '',
					content: '确定要消音该设备吗？',
					confirmText: '消音',
					confirmColor: '#ff3b32',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定')
							self.list.splice(index, 1)
							uni.showToast({
								icon: "success",
								title: '操作成功!',
								duration: 2000
							});
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				});
			}
		}
	};
</script>

<style scoped>
	.index{
		background: #F8F8F8;
	}
	.list-box{
		padding: 20upx 0;
	}
	.container_of_slide {
		width: 100%;
		overflow: hidden;
	}

	.slide_list {
		transition: all 100ms;
		transition-timing-function: ease-out;
		min-width: 200%;
		height: 160upx;
	}

	.now-message-info {
		box-sizing:border-box;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		font-size: 16px;
		clear:both;
		height: 160upx;
		padding: 0 30upx;
		margin-bottom: 20upx;
		background: #FFFFFF;
	}
	.now-message-info,
	.group-btn {
		float: left;
	}

	.group-btn {
		display: flex;
		flex-direction: row;
		height: 160upx;
		min-width: 100upx;
		align-items: center;

	}

	.group-btn .btn-div {
		height: 160upx;
		color: #fff;
		text-align: center;
		padding: 0 50upx;
		font-size: 34upx;
		line-height: 160upx;
	}

	.group-btn .top {
		background-color: #c4c7cd;
	}

	.group-btn .removeM {
		background-color: #ff3b32;
	}
	
	
	.icon-circle{
		background: #3396fb;
		border-radius: 100%;
		width:100upx;
		height: 100upx;
		line-height:100upx;
		text-align:center;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 20px;
		float: left;
	}
	.list-right{
		float: left;
		margin-left: 25upx;
		margin-right: 30upx;
	}
	.list-right-1{
		float: right;
		color: #A9A9A9;
	}
	.list-title{
		width: 350upx;
		line-height:1.5;
		overflow:hidden;
		margin-bottom: 10upx;
		color:#333;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		overflow:hidden;
	}
	.list-detail{
		width: 350upx;
		font-size: 14px;
		color: #a9a9a9;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		overflow:hidden;
	}
	.button-box{
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 998;
		background: #F8F8F8;
	}
	.btn-sub{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		float: left;
		width: 100%;
		height: 100upx;
		background: #F8F8F8;
		color: #7fb2ff;
	}
	.btn-plusempty{
		width: 110upx;
		height: 110upx;
		background: #007bfa;
		position: fixed;
		bottom: 50upx;
		right: 20upx;
		border-radius: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 110upx;
	}
	.empty{
		color: #999999;
	}
	.plusempty-img{
		width: 50upx;
		height: 50upx;
		margin-top: 30upx;
	}
	.scan-box{
		display:block;
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background-color:rgba(0, 0, 0, 0.3);
		z-index:99999;
	}
	.scan-item{
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		position:relative;
		margin:0 auto;
		width:80%;
		height:100%;
		-webkit-box-pack:center;
		-webkit-justify-content:center;
		-ms-flex-pack:center;
		justify-content:center;
		-webkit-box-align:center;
		-webkit-align-items:center;
		-ms-flex-align:center;
		align-items:center;
		-webkit-box-sizing:border-box;
		box-sizing:border-box;
		opacity:1;

	}
	.scan-content{
		position:relative;
		width: 400upx;
		height: 500upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}
	.scan-icon{
		position: absolute;
		top: -50upx;
		left: 150upx;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		box-sizing:border-box;
		background: #FFFFFF;
		padding: 20upx;
	}
	.scan-icon-img{
		width: 100%;
		height: 100%;
	}
	.scan-text{
		position: absolute;
		bottom: 40upx;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
	.scan-share{
		width: 100%;
		height: 100%;
	}
	.scan-img{
		width: 300upx;
		height: 300upx;
		margin: auto;
		display: block;
		position: absolute;
		top: 80upx;
		left: 50upx;
		z-index: 99;
	}
	.scan-btn{
		top:-30upx;
		left:auto;
		right:-30upx;
		bottom:auto;
		position:absolute;
		width:64upx;
		height:64upx;
		border-radius:50%;
		z-index:99999;
		display: flex;
	}
	.uni-list-cell-hover {
		background-color: #eeeeee;
	}
	.bottom-btn-hover{
		background: #0564c7!important;;
	}
</style>
