<template>
	<view>
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">工单编号</text>
				<text class="cell-tip">33213123131</text>
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">执行人:</text>
				<text>张三</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">执行时间:</text>
				<text>2019-3-3</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工地点:</text>
				<text>无锡-滨湖区</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">任务内容:</text>
				<text>维修设备</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">最迟时间:</text>
				<text>2019-3-20</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">完成时间:</text>
				<text>2019-3-11</text>
			</view>
		</view>
		<view class="yt-list">			
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工人:</text>
				<text>李四</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">派工时间:</text>
				<text>2019-3-5</text>
			</view>
		</view>

		<view class="uni-list list-pd">
			<view class="uni-list-cell cell-pd">
				<view class="uni-uploader">
					<view class="uni-uploader-head">
						<view class="uni-uploader-title">相关资料图片</view>
					</view>
					<view class="uni-uploader-body">
						<view class="uni-uploader__files">
							<block v-for="(image,index) in imageList" :key="index">
								<view class="uni-uploader__file">
									<image class="uni-uploader__img" src="/static/emptyCart.jpg" data-src="/static/emptyCart.jpg" @tap="previewImage"></image>
								</view>
							</block>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<text>20号前必须完成</text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<view class="price-content">
				<text>状态：</text>
				<text class="price-tip">{{status}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components: {
			uniIcon,
			cmdCellItem
		},
		computed: {
			...mapState([ 'userRole']),
		},
		data() {
			return {
				product_image: '',
				product_name: '',
				product_price: '',
				price: '',
				status:'',
				representative_name: '',
				consultant: '',
				consultant_phone: '',
				user_name: '',
				user_sex: '',
				user_age: '',
				user_collect_type: '',
				user_phone: '',
				user_collector: '',
				remark: '',
				imageList: [
					{image:"/static/emptyCart.jpg"},					
					],
			}
		},
		onLoad(e) {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		background: gainsboro;
		padding-bottom: 100upx;
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.g-item {
			display: flex;
			margin: 20upx 20upx;

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
				padding-top: 30upx;

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
			font-size: 28upx;
			color: dimgray;
			margin-right: 15upx;
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
			}
		}

		.desc {
			flex: 1;
			font-size: 28upx;
			color: darkgray;
		}
	}


	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

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
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: darkcyan;
		}
	}
</style>
