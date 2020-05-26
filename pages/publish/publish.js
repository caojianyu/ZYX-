// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		imgas:["../../assets/publish/0944c9716edbe44853f9c9b4ec7489f.png"]
  },
	sell(){
		wx.navigateTo({
			url: 'sell/sell',
		})
	},
	buy(){
		wx.navigateTo({
			url: 'buy/buy',
		})
	},
	goto(){
		wx.navigateTo({
			url: '/pages/home/homeLeiBo/personalHousing/other/other',
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