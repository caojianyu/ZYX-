// pages/home/newHouseList/newHouseList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2515003666,548988553&fm=26&gp=0.jpg",
		browsingHistory:{
			moban1:[
				{
					image:"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
					title:"恒大名都",
					location:"八一路与园林路交汇处",
					residence:"哈慈",
					tag:["多层","板塔结合","高层"],
					price:30000,
					status:1
				},{
					image:"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
					title:"合力达卓越南越",
					location:"八一路与园林路交汇处",
					tag:["多层","板塔结合","高层"],
					residence:"哈慈",
					price:30000,
					status:0
				},
				{
					image:"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
					title:"合力达卓越南越",
					location:"八一路与园林路交汇处",
					tag:["多层","板塔结合","高层"],
					residence:"哈慈",
					price:30000,
					status:0
				},
				{
					image:"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
					title:"合力达卓越南越",
					location:"八一路与园林路交汇处",
					tag:["多层","板塔结合","高层"],
					residence:"哈慈",
					price:30000,
					status:0
				},
				{
					image:"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
					title:"合力达卓越南越",
					location:"八一路与园林路交汇处",
					tag:["多层","板塔结合","高层"],
					residence:"哈慈",
					price:30000,
					status:0
				}
			],
		},
		nearbyNewHouse: [{
					id: '1',
					zd: '1',
					img: '/assets/home/homeListItem/home01.png',
					title: '合力达卓越南城',
					stmel: '北海区',
					stmels: '东路101号',
					number: '15000',
					specifications: '2室1厅',
					squaremeter: '67.7',
					homesuper: '精装修',
					q1: "海景",
					q2: "别墅",
					homeN: 1,
					homeS: "停售"
				},
				{
					id: '2',
					img: '/assets/home/homeListItem/home01.png',
					title: '中心海城',
					stmel: '途家丛',
					stmels: '赤岭路110路',
					number: '11000',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					homeS: "在售"
				},
				{
					id: '3',
					img: '/assets/home/homeListItem/home01.png',
					title: '广夏大楼',
					stmel: '梅溪湖',
					stmels: '鼎奥国际',
					number: '14000',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					homeS: "在售"
				},
				{
					id: '4',
					img: '/assets/home/homeListItem/home01.png',
					title: '溪岛精装套三，靠地铁',
					stmel: '长沙县',
					stmels: '小遂溪岛',
					number: '90000',
					q1: "海景",
					q2: "别墅",
					homeN: 2,
					homeS: "在售"
				}
			]
  },
	detail(){
		wx.navigateTo({
			url:'detail/detail'
		})
	},
	map(){
		wx.getSetting({
			success(res) {
				if(!res.authSetting['scope.userLocation']){
					wx.chooseLocation()
				}
			}
		})
		wx.chooseLocation()
	},
	to(){
		wx.navigateTo({
			url:'/pages/home/homeGods/homeGods'
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
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