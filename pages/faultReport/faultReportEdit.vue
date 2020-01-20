<template>
	<view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">记录编号</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写故障编号" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">上报人</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写故障上报人姓名" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">故障设备</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写故障设备" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">故障地点</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写故障信息" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">故障内容</text>
				<input class="desc" type="text" v-model="remark" placeholder="请填写故障信息" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">故障时间</text>
				<text>2019-10-10 15:11</text>
			</view>
		</view>
		<!-- 受检人信息 -->
		<view class="yt-list">
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head"  style="margin-left: 40upx;">
							<view class="uni-uploader-title">故障记录图片（最多9张）</view>
							<view class="uni-uploader-info">{{imageList.length}}/9</view>
						</view>
						<view class="uni-uploader-body"  style="margin-left: 30upx;">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in imageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImage"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>		
			
		<button class="add-btn" @click="submit">上报故障记录</button>
		
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
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
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
				buyer_phone: '',
				buyer_collector: '',
				remark: '',
				imageList: [],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		},
		computed: {
			...mapState(['userRole']),
		},
		methods: {
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
</style>
