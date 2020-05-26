// pages/publish/sell/detail/entrust/entrust.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		ischecked:true,
		isShow:false,
  },
	tab(e){
		// e.currentTarget.dataset.show==1?this.setData({ischecked:true}):this.setData({ischecked:false})
		this.setData({
			isShow:!this.data.isShow
		})
	},
	publish(){
		let token=wx.getStorageSync('token');
		if(token==""){
			wx.showModal({
				title:'请登录',
				content:'仅对注册用户开放。'
			})
			return;
		}
		wx.showModal({
			title:'发布成功',
			content:'交易过程中有任何疑问可以随时与我们联系，我们将为您提供完善的交易服务',
			success(res) {
				if(res.confirm){
					wx.showModal({
						title:'发布成功',
						content:'服务顾问会在24小时之内与您取得联系，对您所出售的房源进行详细查验，请注意接听电话'
					})
				}
			}
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})