// pages/publish/sell/sell.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		area: 0,
		type: 0,
		imags:["../../../assets/publish/01.jpg"],
		site: [
			'道里区',
			'南岗区',
			'道外区',
			'香坊区',
			'动力区',
			'平方区',
			'松北区',
			'呼兰区',
			'伊兰区',
			'方正区',
			'宾区',
			'巴彦区',
			'宾区',
			'宾区',
			'宾区',
			'宾区',
			'宾区',
			'宾区',
			'宾区',
		],
		houseType:[
			'住宅',
			'别墅',
			'商铺'
		],
		residence: ""
	},
	input(e) {
		this.setData({
			residence:e.detail.value
		})
	},
	detail() {
		if(this.data.residence.length<3){
			wx.showToast({
				title:"请正确输入校区名称或街道门牌号",
				icon:"none"
			});
			return
		}
		if (this.data.residence == "") {
			wx.showToast({
				title: '请选择小区',
				icon: 'none'
			});
			return
		}
		wx.navigateTo({
			url: 'detail/detail'
		})
	},
	area(e) {
		this.setData({
			area: e.currentTarget.dataset.index
		})
	},
	type(e){
		this.setData({
			type: e.currentTarget.dataset.index
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
