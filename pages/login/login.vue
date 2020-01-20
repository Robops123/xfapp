<template>
	<view class="content">
		<image src="../../static/img/login_bg.png" mode="" class="bg"></image>
		<!-- <view class="logo"><image src="../../static/logo.png" mode=""></image></view> -->
		<view class="uni-form-item uni-column">
			<view>
				
			</view>
			<view>
				<image src="../../static/img/login_user.png" mode=""></image>
				<input type="tel"  v-model="username" name="" placeholder="输入您的用户名" />
			</view>
		</view>
		<view class="uni-form-item uni-column">
			<view>
				
			</view>
			<view>
				<image src="../../static/img/login-paw.png" mode=""></image>
				<input type="password"  v-model="password" name="" placeholder="输入您的密码" />
			</view>
		</view>
		<view class="uni-form-item uni-column no-border">
			<checkbox-group name="" @change='change'>
				<label>
					<checkbox :value="remember" :checked="remember"/><text>记住密码</text>
				</label>
			</checkbox-group>
			
		</view>
		<button type="primary" @tap="login">登录</button>
		<!-- <button @click="net">net</button> -->
	</view>
</template>

<script>
	import request from '../../api/request.js'
	import global from '../../static/js/global.js'
	import {Common} from '../../static/js/Common.js'
	export default {
			mixins:[Common],
		data() {
			return {
				username:'',
				password:'',
				tenantType:'',
				remember:true,
				notice:'',
				res:''
			}
		},
		onLoad() {
			// console.log(uni.getStorageSync('rememerPsd'))
			if(uni.getStorageSync('rememerPsd')!=''){
				var rememberdata=uni.getStorageSync('rememerPsd')
				this.remember=rememberdata.remember
				this.username=rememberdata.username
				this.password=rememberdata.password
			}
		},
		methods: {
			login: function () {
				if(this.username!=''){
					if(this.password!=''){
						if(this.networkEnable()){
							global.showLoading()
							var that=this
							var param = { 
								username:this.username,
								password:this.password
							}
							request.login(param,(res) =>{
								if(res.code == 200){
									that.tenantType=res.data.tenantType
									uni.setStorageSync('Authorization',res.data.Authorization)
									uni.setStorageSync('tenantId',res.data.tenantId)
									that.getName(res.data.tenantId)
									global.hideLoading()
								}else{
									global('登录失败')
									global.hideLoading()
								}
							},reason =>{
								// global.showToast(JSON.stringify(reason))
								global.hideLoading()
								global.showToast(reason)
							})
						}else{
							if(uni.getStorageSync('tenantId')!=''){
								global.showToast('离线模式')
								setTimeout(function(){
									uni.redirectTo({
										url:'/pages/index/index'
									});
								},3000)
							}
						}
					}else{
						global.showToast('请输入密码')
					}
				}else{
					global.showToast('请输入用户名')
				}
				
			},
			change(e){
				console.log(e)
				if(e.detail.value.length>0){
					this.remember=true
				}else{
					this.remember=false
				}
			},
			getName(id){
				global.showLoading()
				var that=this
				var param = { 
					tenantId:id
				}
				request.apiGet('/inspectionPoint/getUnitName',param).then((res) =>{
					if(res.code == 200){
						uni.setStorageSync('userName',res.data)
						global.showToast('登录成功')
						global.hideLoading()
						if(that.remember){
							uni.setStorageSync('rememerPsd',{
								remember:true,
								username:that.username,
								password:that.password
							})
						}
						if(that.tenantType=='tena'){//维保
							setTimeout(function(){
								uni.redirectTo({
									url:'/pages/workOrder/workorderlist'
								});
							},1000)
						}else{
							setTimeout(function(){
								uni.redirectTo({
									url:'/pages/index/index'
								});
							},1000)
						}
					}else{
						global.showToast(res.data.msg)
						global.hideLoading()
					}
				}).catch(reason =>{
					global.showToast(reason)
					global.hideLoading()
				})
			},
			net(){
				var enb=this.networkEnable()
				alert(enb)
			}
		},
	}
</script>

<style lang="scss" scoped>
	$color-primary: #4f82f8;
	.content{
		// padding: 100upx;
	}
	.logo{
	    text-align: center;
		image{
		    height: 200upx;
		    width: 200upx;
		    margin: 0 0 60upx;
		}
	}
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		position: relative;
		display: flex;
		padding: 10px 0;
		width: 80%;
		margin: 10px auto;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			// padding: 7px 0;
		}
		input{
			padding-left: 75upx;
		}
		image{
			position: absolute;
			width: 60upx;
			height: 60upx;
		}
	}
	button[type="primary"]{
		background-color: #2196fd;
		border-radius: 0;
		font-size: 34upx;
		width: 80%;
		margin: 60px auto 0;
	}
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
	.bg{
		width: 100%;
	}
	.no-border{
		border: none;
	}
</style>
