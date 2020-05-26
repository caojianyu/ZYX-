// pages/home/homeLeiBo/personalHousing/complain/complain.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		msg: [
			"房屋已售",
			"价格不真实",
			"图片不真实",
			"中介冒充",
		],
		cueerentChoose: -1
	},
	choose(e) {
		this.setData({
			cueerentChoose: e.currentTarget.dataset.index
		})
	},
	submit() {
		if (this.data.cueerentChoose == -1) {
			console.log(this.data.cueerentChoose)
			wx.showToast({
				title: "请选择举报原因",
				icon: "none"
			})
			return
		}
		wx.showModal({
			title: '感谢您得反馈',
			content: '系统已经记录您得反馈，信息核实后违规房源将被下架处理',
			confirmText: "返回房源",
			cancelText: "返回列表",
			success(res) {
				if(res.cancel){
					wx.navigateBack({
						delta: 2
					})
				}else{
					wx.navigateBack({
						delta: 1
					})
				}
				
			}
		})
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
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

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
