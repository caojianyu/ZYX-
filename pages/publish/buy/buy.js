// pages/publish/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		img:["../../../assets/publish/02.jpg"],
		name:"",
		number1:"",
		currentTypeChoose:0,
		currentFitmentChoose:0,
		currentSpecificationChoose:0,
		type:[
			"住宅",
			"别墅",
			"商铺",
			"写字楼",
		],
		fitment:[
			"简装",
			"精装",
			"豪装",
			"毛坯",
			"不限",
		],
		specification:[
			"一室",
			"二室",
			"三室",
			"四室",
			"五室",
			"五室以上"
		]
  },
	change(e){
		// 判断是否登录
		// let token=wx.getStorageSync("token");
		// if(!token){
		// 	wx.showModal({
		// 		title:"请先登录",
		// 		content:"仅对注册用户开放。"
		// 	})
		// 	return
		// }
		console.log(e)
	},
	change1(e){
		// let token=wx.getStorageSync("token");
		// if(!token){
		// 	wx.showModal({
		// 		title:"请先登录",
		// 		content:"仅对注册用户开放。"
		// 	})
		// 	return
		// }
		console.log(e)
	},
	publish(){
		let that=this;
		let reg = /^[\u4E00-\u9FA5]+$/;
		if (!reg.test(that.data.name)) {
			wx.showToast({
				title: '请输入正确的称呼',
				icon: "none"
			})
			return
		}
		if(that.data.number1.length<11){
			wx.showToast({
				title: '请输入正确手机号',
				icon: "none"
			})
			return
		};
		let token=wx.getStorageSync("token");
		if(!token){
			wx.showModal({
				title:"请先登录",
				content:"仅对注册用户开放。"
			})
			return
		}
		wx.showModal({
			title:'发布成功',
			content:'全新找房模式即将开始，服务顾问将尽快与您联系'
		})
	},
	type(e){
		// let token=wx.getStorageSync("token");
		// if(!token){
		// 	wx.showModal({
		// 		title:"请先登录",
		// 		content:"仅对注册用户开放。"
		// 	})
		// 	return
		// }
		this.setData({
			currentTypeChoose:e.currentTarget.dataset.index
		})	
	},
	fitment(e){
		// let token=wx.getStorageSync("token");
		// if(!token){
		// 	wx.showModal({
		// 		title:"请先登录",
		// 		content:"仅对注册用户开放。"
		// 	})
		// 	return
		// }
		this.setData({
			currentFitmentChoose:e.currentTarget.dataset.index
		})	
	},
	specification(e){
		// let token=wx.getStorageSync("token");
		// if(!token){
		// 	wx.showModal({
		// 		title:"请先登录",
		// 		content:"仅对注册用户开放。"
		// 	})
		// 	return
		// }
		this.setData({
			currentSpecificationChoose:e.currentTarget.dataset.index
		})	
	},
	name(e){
		this.setData({
			name:e.detail.value
		})
	},
	number1(e){
		console.log(e)
		this.setData({
			number1:e.detail.value
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