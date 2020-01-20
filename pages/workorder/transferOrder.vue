<template>
	<view>
		<view class="example-title">工单过程</view>
		<view class="example-body">
			<uni-steps :options="list1" :active="active" />
		</view>
		<view class="example-title">流转日志</view>
		<view class="example-body">
			<uni-steps :options="list2" :active="active" direction="column" />
		</view>
		<button type="primary"  @tap="showTree">指派选择</button>
		<tki-tree ref="tkitree" :selectParent="selectParent" :multiple="multiple" :range="list" rangeKey="name" @confirm="treeConfirm" @cancel="treeCancel"></tki-tree>
		
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import tkiTree from '@/components/tki-tree/tki-tree.vue';
	let testList = [{
			id: 1,
			name: '工程部',
			children: [{
				id: 11,
				name: '工程部一组',
				children: [{
						id: 111,
						name: '工程一组第一大队',
						children: [{
							id: 1111,
							name: '张小二',
						}, ]
					},
					{
						id: 112,
						name: '工程部二组',
					},
					{
						id: 113,
						name: '工程部三组',
					}
				]
			}, ]
		},		
		{
			id: 4,
			name: '总经理',
		},
		{
			id: 5,
			name: '技术总监',
		},
		{
			id: 6,
			name: '技术副总',
		}
	]
	export default {
		components: {
			uniSteps,tkiTree
		},
		data() {
			return {
				list: [],
				multiple:false,
				selectParent:false,
				active: 1,
				list1: [{
					title: '创建'
				}, {
					title: '指派'
				}, {
					title: '等待指派'
				}],
				list2: [{
					title: '张龙创建',
					desc: '2018-11-11'
				}, {
					title: '指派到赵虎',
					desc: '2018-11-12'
				}]
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.list = testList;
			}, 300)
		},
		methods: {
			change(e) {
				if (this.active < this.list1.length - 1) {
					this.active += 1;
					this.list1[this.list1.length - 1].title="指派";
				} else {
					this.active = 0
				}
			},
			treeConfirm(e){
				console.log(e)
				this.change(e);
			},
			// 取消回调事件
			treeCancel(e){
				console.log(e)
			},
			// 显示树形选择器
			showTree(){
				this.$refs.tkitree._show();
			},
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	button {
		margin: 30upx;
	}
</style>