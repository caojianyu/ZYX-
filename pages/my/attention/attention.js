// pages/my/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		personalHousing: [{
				id: '1',
				zd: '1',
				img: '../../assets/home/homeListItem/01.png',
				title: '海港广场，精装标准套三出售，带家具家电靠地铁',
				stmel: '芙蓉区',
				stmels: '长房东立',
				number: '70',
				specifications: '2室1厅',
				squaremeter: '67.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s01.png',
				type: '个人'
			},
			{
				id: '2',
				img: '../../assets/home/homeListItem/02.png',
				title: '中心广场中心.领包入住，精装修房东直租',
				stmel: '开福区',
				stmels: '宽属大厦',
				number: '90',
				specifications: '3室1厅',
				squaremeter: '77.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s02.png',
				type: '个人'
			},
			{
				id: '3',
				img: '../../assets/home/homeListItem/03.png',
				title: '南儿街顶楼地段好地铁房双林小学 带花园',
				stmel: '梅溪湖',
				stmels: '鼎奥国际',
				number: '145',
				specifications: '2室',
				squaremeter: '127.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s03.png',
				type: '个人'
			},
			{
				id: '4',
				img: '../../assets/home/homeListItem/04.png',
				title: '溪岛精装套三，靠地铁',
				stmel: '长沙县',
				stmels: '小遂溪岛',
				number: '90',
				specifications: '3室1厅',
				homesuper: '精装修',
				squaremeter: '57.7',
				avatar: '../../assets/home/Headportrait/s04.png',
				type: '个人'
			}
		],
		excellentHouse: [{
				id: '1',
				zd: '1',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '海港广场，精装标准套三出售，带家具家电靠地铁',
				stmel: '芙蓉区',
				stmels: '长房东立',
				number: '70',
				specifications: '2室1厅',
				squaremeter: '67.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s01.png',
				type: '个人'
			},
			{
				id: '2',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '中心广场中心.领包入住，精装修房东直租',
				stmel: '开福区',
				stmels: '宽属大厦',
				number: '90',
				specifications: '3室1厅',
				squaremeter: '77.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s02.png',
				type: '个人'
			},
			{
				id: '3',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '南儿街顶楼地段好地铁房双林小学 带花园',
				stmel: '梅溪湖',
				stmels: '鼎奥国际',
				number: '145',
				specifications: '2室',
				squaremeter: '127.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s03.png',
				type: '个人'
			},
			{
				id: '4',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '溪岛精装套三，靠地铁',
				stmel: '长沙县',
				stmels: '小遂溪岛',
				number: '90',
				specifications: '3室1厅',
				homesuper: '精装修',
				squaremeter: '57.7',
				avatar: '../../assets/home/Headportrait/s04.png',
				type: '个人'
			}
		],
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