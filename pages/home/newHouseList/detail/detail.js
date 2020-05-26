// pages/home/newHouseList/detail/detail.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phone:10086,
		imgs: "../../../../assets/home/homeListItem/123.jpg",
		price: 25000,
		// 楼盘名称
		locations: "哈尔滨松北新区利民大道888号",
		location: "君豪新城",
		isMakes: true,
		close: true,
		info:{
			yushouzheng: "HL0082/HL0083/HL0084",
			dizhi: "哈尔滨松北新区利民大道888号",
			kaifashang: "君豪集团-哈尔滨君豪置业房地产有限公司",
			shijian: "2017年08月12日"
		},
		//楼盘经纬度
		longitude: 104.07,
		latitude: 30.67,
		attention: false,
		collect: false,
		advertising: [],
		// 报名信息
		name: "",
		phone: "",
		// 效果图
		resultPictrue: [
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg",
			"http://www.hb114.cc/textqi/yunying002/image/20141011/20141011161228_0225.jpg"
		],
		// 交通图
		trafficPictrue: [
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg",
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg",
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg",
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg",
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271295523,351510139&fm=26&gp=0.jpg"
		],
		// 户型图
		housePictrue: [
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587287140900&di=6ca422b6a871745722516d30a538da02&imgtype=0&src=http%3A%2F%2Ft1.focus-img.cn%2Fxf%2Fzxc%2Fe7d80ef29870a8938b89f9bd6251b6d7.jpg",
		],
		// 轮播图
		swiperImg: [
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587276510186&di=6f12d4e15d1a075ad1dd0919a71f8896&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587276510186&di=6f12d4e15d1a075ad1dd0919a71f8896&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3459577709,2030184934&fm=26&gp=0.jpg"
		],
		//地图标记点
		markers: [{
			id: 0,
			latitude: 30.67,
			longitude: 104.07,
			iconPath: "/assets/biaojidianwei.png",
			width: 30,
			height: 30,
			label: {
				content: '君豪新城', //文本
				color: '#FF0202', //文本颜色
				borderRadius: 3, //边框圆角
				borderWidth: 1, //边框宽度
				borderColor: '#FF0202', //边框颜色
				bgColor: '#ffffff', //背景色
				padding: 5, //文本边缘留白
				textAlign: 'center' //文本对齐方式。有效值: left, right, center
			}
		}],
		// 房东直卖
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
		// 优质房源
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
		// 周边新房
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
	phone() {
		wx.makePhoneCall({
			phoneNumber:this.data.phone,
		})
	},
	priview1(e) {
		let that = this;
		wx.previewImage({
			urls: that.data.resultPictrue
		})
	},
	priview2() {
		let that = this;
		wx.previewImage({
			urls: that.data.trafficPictrue
		})
	},
	priview3() {
		let that = this;
		wx.previewImage({
			urls: that.data.housePictrue
		})
	},
	close() {
		this.setData({
			close: true,
			isMakes: true,
		})
	},
	apply() {
		this.setData({
			close: false,
			isMakes: false,
		})
	},
	bindinput(e) {
		let that = this;
		if (e.currentTarget.dataset.item == "name") {
			that.setData({
				name: e.detail.value
			})
		} else {
			that.setData({
				phone: e.detail.value
			})
		}
	},
	submit() {
		var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
		if (!patrn.exec(this.data.name)) {
			wx.showToast({
				title: "请输入正确的名字",
				icon: "none"
			})
			return
		} else if (this.data.phone.length < 11) {
			wx.showToast({
				title: "请输入正确的手机号",
				icon: "none"
			})
			return
		} else {
			console.log(this.data.name)
			console.log(this.data.phone)
		}
	},
	previewImage(e) {
		let index = e.currentTarget.dataset.index
		console.log(index)
		let that = this;
		wx.previewImage({
			urls: that.data.swiperImg,
			current: that.data.swiperImg[index]
		})

	},
	detail() {
		wx.navigateTo({
			url: 'detailInfo/detailInfo'
		})
	},
	attention() {
		if (this.data.attention) {
			this.setData({
				attention: false
			})
			wx.showToast({
				title: '取消关注成功',
				icon: 'none'
			})
		} else {
			this.setData({
				attention: true
			})
			wx.showToast({
				title: '关注成功',
				icon: 'none'
			})
		}
	},
	collect() {
		if (this.data.collect) {
			this.setData({
				collect: false
			})
			wx.showToast({
				title: '取消收藏成功',
				icon: 'none'
			})
		} else {
			this.setData({
				collect: true
			})
			wx.showToast({
				title: '收藏成功',
				icon: 'none'
			})
		}
	},
	goTo() {
		wx.navigateTo({
			url: '/pages/home/homeGods/homeGods'
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
