// pages/home/homeWYue/homeWYue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    WYitemList:[
      {id:1,img:"../../../assets/home/homeListItem/123.jpg"},
    ],
    /**服务列表数据接口 */
    WyitemListItem:[
      {
        id:1,
        title:'子弹找房',
        title01:'友谊路服务中心',
        buttonValue:'联系我们',
        title02:'服务项目',
        title03:'交易签约,买卖过户,内容',
        title04:'内容内容内容内容内容内容',
        phone:'0453-12342155',
        homeDiZ:'道里区友谊路232-1号'
      },
      {
        id:1,
        title:'子弹找房',
        title01:'友谊路服务中心',
        buttonValue:'联系我们',
        title02:'服务项目',
        title03:'交易签约,买卖过户,内容',
        title04:'内容内容内容内容内容内容',
        phone:'0453-12342155',
        homeDiZ:'道里区友谊路232-1号'
      },
      {
        id:1,
        title:'子弹找房',
        title01:'友谊路服务中心',
        buttonValue:'联系我们',
        title02:'服务项目',
        title03:'交易签约,买卖过户,内容',
        title04:'内容内容内容内容内容内容',
        phone:'0453-12342155',
        homeDiZ:'道里区友谊路232-1号'
      }
    ]
  },
  gotoSomething:function(e){
    wx.navigateTo({
      url: '/pages/home/homeSellBuy/homeSellBuy'
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