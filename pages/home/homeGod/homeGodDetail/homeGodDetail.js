// pages/home/homeGod/homeGodList/homeGodList.js
Page({

	/**
	 * 页面的初始数据
	 */
	collect: false,
	msg:"位置:此房,前面是小区的绿化带,景观绝好,下楼2m出小区,上班方便。+户型:1室1卫0阳台45m²,保养的太好了,看房方便。装修:普通服务:资深经纪人24h服务热线*承诺:所有离源均为真实有效房源,恭候您的来电咨询！",
	data: {
		info:{
			name: "周某人",
			img:"../../../../assets/home/Headportrait/s01.png",
			phone:10086
		},
		images1:"../../../../assets/0bb3c290e353d785fa1bd27391cab43.png",
		images: [
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg"
		],
		// name不赋值  只赋值price
		houseInfo: [{
				name: "单价",
				price: "56914.5元/m²"
			},
			{
				name: "挂牌",
				price: "2019.07.19"
			},
			{
				name: "面积",
				price: "62.55m²"
			},
			{
				name: "户型",
				price: "2室2厅1卫"
			},
			{
				name: "朝向",
				price: "东"
			},
			{
				name: "楼层",
				price: "6/16"
			},
			{
				name: "装修",
				price: "精装"
			},
			{
				name: "权属",
				price: "商品房"
			},
			{
				name: "用途",
				price: "普通住宅"
			},
			{
				name: "电梯",
				price: "有电梯"
			},
			{
				name: "首付预算",
				price: "首付约 25万元"
			},
			{
				name: "小区",
				price: "左方坊"
			},
		],
		observe: [{
				name: "房源户型",
				price: "2室1厅1卫"
			},
			{
				name: "建筑面积",
				price: "62.55m²"
			},
			{
				name: "套内面积",
				price: "50.32m²"
			},
			{
				name: "户型结构",
				price: "平层"
			},
			{
				name: "梯户结构",
				price: "平层"
			},
			{
				name: "梯户结构",
				price: "六梯三十五户"
			},
			{
				name: "供暖方式",
				price: "自供暖"
			},
			{
				name: "房屋年限",
				price: "满五年"
			},
			{
				name: "房屋用途",
				price: "普通住宅"
			},
			{
				name: "交易权属",
				price: "商品房"
			},
			{
				name: "产权所属",
				price: "非共有"
			},
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
			}
		],
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
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	collect() {
		if (this.data.collect) {
			this.setData({
				collect: false
			});
			wx.showToast({
				title: "取消收藏成功",
				icon: "none"
			})
		} else {
			this.setData({
				collect: true
			});
			wx.showToast({
				title: "收藏成功",
				icon: "none"
			})
		}
	},
	call() {
		wx.makePhoneCall({
			phoneNumber: this.info.phone
		})
	},
	previewImage() {
		wx.previewImage({
			urls: this.data.images
		})
	},
	goodHouse() {
		wx.navigateBack({
			delta: 1
		})
	},
	personal() {
		let pages = getCurrentPages();
		let currPage = pages[pages.length - 1];
		let prevPage = pages[pages.length - 2];
		prevPage.setData({
			currentInexs: 0,
		});
		wx.navigateBack({
			delta: 1
		})
	},
	newHouse() {
		wx.navigateTo({
			url: "/pages/home/newHouseList/newHouseList"
		})
	},
	onLoad: function(options) {
		console.log(options)
	},
	serve() {
		wx.navigateTo({
			url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailOther/homeGodDetailOther'
		})
	},

	other() {
		wx.navigateTo({
			url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailServe/homeGodDetailServe'
		})
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
