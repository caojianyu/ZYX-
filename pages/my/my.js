// pages/my/my.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		animationData: {},
		isShow: [0, 0, 0],
	},
	rotate() {
		var animation = wx.createAnimation({
			duration: 1000,
			timingFunction: "ease"
		});
		this.animation = animation
		animation.rotate(760).step()
		this.setData({
			animationData: animation.export()
		});
		wx.showToast({
			title: "更新成功",
			icon: "none"
		})
		setTimeout(() => {
			animation.rotate(0).step()
			this.setData({
				animationData: animation.export()
			})
		}, 1200)
	},
	question() {
		wx.navigateTo({
			url: 'commonQuestion/commonQuestion'
		})
	},
	attention() {
		wx.navigateTo({
			url: 'attention/attention'
		})
	},
	release() {
		wx.navigateTo({
			url: 'release/release'
		})
	},
	buy(){
		wx.navigateTo({
			url:"/pages/publish/buy/buy"
		})
	},
	getuserinfo() {
		wx.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.login({
						success(res) {
							wx.request({
								url: "",
								method: "POST",
								data: {
									code: res.code
								},
								success(res) {
									console.log(res)
									// 换取openId  然后换取获取token
								}
							})
						}
					})
				} else {
					wx.showToast({
						title: "授权失败",
						icon: "none"
					});
					wx.openSetting({
						success(res) {
							console.log(res)
						}
					})
				}
			}
		})
	},
	goto() {
		wx.navigateTo({
			url: "pages/home/homeWYue/homeWYue"
		})
	},
	phone() {
		wx.makePhoneCall({
			phoneNumber: "10086",
		})
	},
	/**
	 * 生命周期函数--监听页面显示
	 */
	calculate() {
		wx.navigateTo({
			url: "calculate/calculate"
		})
	},
	AboutUs() {
		wx.navigateTo({
			url: 'AboutUs/AboutUs'
		})
	},
	agreement() {
		wx.navigateTo({
			url: 'agreement/agreement'
		})

	},
	onShow: function() {

	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},


	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
