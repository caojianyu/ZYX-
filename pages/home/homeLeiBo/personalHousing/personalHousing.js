// pages/home/homeLeiBo/personalHousing/personalHousing.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgs:"../../../../assets/home/butie.png",
		msg:"位置:此房,前面是小区的绿化带,景观绝好,下楼2m出小区,上班方便。+户型:1室1卫0阳台45m²,保养的太好了,看房方便。装修:普通服务:资深经纪人24h服务热线*承诺:所有离源均为真实有效房源,恭候您的来电咨询！",
		collect :false,
		info:{
			name:"周某人",
			type:"0",
			phone:"",
		},
		//楼盘经纬度
		longitude: 104.07,
		latitude: 30.67,
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
		// 轮播图
		images:[
			"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4018216757,316269704&fm=26&gp=0.jpg",
			"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4018216757,316269704&fm=26&gp=0.jpg",
			"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4018216757,316269704&fm=26&gp=0.jpg",
			"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4018216757,316269704&fm=26&gp=0.jpg",
		],
		// 活动图
		advertisingImage:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587297455594&di=0ee54da5d32054f6ff19c2973dc86b16&imgtype=0&src=http%3A%2F%2Fimg.pcauto.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fauto5%2F1801%2F15%2Fc12%2F72686198_1516001335047.jpg"],
		advertisingImage1:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587297468926&di=be13e15b4b8d73272f4ed5ddc1c0deb8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc3d23cd6368a684ec44544d879d98d0b7a5b706f.jpg"],
		houseInfo:[
			{
				name:"单价",
				price:"56914.5元/m²"
			},
			{
				name:"挂牌",
				price:"2019.07.19"
			},
			{
				name:"面积",
				price:"62.55m²"
			},
			{
				name:"户型",
				price:"2室2厅1卫"
			},
			{
				name:"朝向",
				price:"东"
			},
			{
				name:"楼层",
				price:"中楼层/16"
			},
			{
				name:"装修",
				price:"精装"
			},
			{
				name:"权属",
				price:"商品房"
			},
			{
				name:"用途",
				price:"普通住宅"
			},
			{
				name:"电梯",
				price:"有电梯"
			},
			{
				name:"小区",
				price:"正基城市主场"
			},
		],
		// 个人房源
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
	getuserinfo() {
		let that=this;
		wx.getSetting({
			success(res) {
				if (res.authSetting["scope.userInfo"]) {
					wx.login({
						success(res) {
							wx.request({
								url: "",
								method: "POST",
								header: {
									'content-type': 'application/json'
								},
								data: {
									code: res.code
								},
								success(res) {
									//换取openId码
									console.log(res)
									wx.request({
										url: gobleurl + "account/wechatLogin",
										header: {
											'content-type': 'application/json'
										},
										data: {
											openId: openid
										},
										method: 'POST',
										success(res) {
											//换取toen
											console.log(res);
											//获取用户信息  0为黑名单
												let blacklist=res.blacklist;
												wx.setStorageSync("blacklist");
											// 0为黑名单  1为正常
											if(res.blacklist==0){
												wx.showModal({
													title:"系统繁忙",
													content:'请过段时间再试'
												});
												return
											}else{
												let phone=that.data.info.phone;
												wx.makePhoneCall({
													phoneNumber:phone
												})
											}
										}
									})
								}
							})
						}
					})
				} else {
					wx.showModal({
						title: "授权提示",
						confirmText: "去设置",
						confirmColor: "#1970cc",
						content: "要先允许使用[用户信息]才可以体验更多功能哦",
						success(res) {
							if (res.confirm) {
								wx.openSetting({
									success(res) {
										if (res.authSetting["scope.userInfo"]) {
											wx.login({
												success(res) {
													wx.request({
														url: "",
														method: "POST",
														header: {
															'content-type': 'application/json'
														},
														data: {
															code: res.code
														},
														success(res) {
															//换取openId码
															console.log(res)
															wx.request({
																url: gobleurl + "account/wechatLogin",
																header: {
																	'content-type': 'application/json'
																},
																data: {
																	openId: openid
																},
																method: 'POST',
																success(res) {
																	//换取toen
																	console.log(res)
																	//获取用户信息  0为黑名单
																		let blacklist=res.blacklist;
																		wx.setStorageSync("blacklist");
																	// 0为黑名单  1为正常
																	if(res.blacklist==0){
																		wx.showModal({
																			title:"系统繁忙",
																			content:'请过段时间再试'
																		});
																		return
																	}else{
																		let phone=that.data.info.phone;
																		wx.makePhoneCall({
																			phoneNumber:phone
																		})
																	}
																}
															})
														}
													})
												}
											})
										}
									}
								})
							}
						}
					})
					this.getUserInfo()
				}
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	goodHouse() {
		let pages = getCurrentPages();
		let currPage = pages[pages.length - 1];
		let prevPage = pages[pages.length - 2];
		prevPage.setData({
			currentInexs: 1,
		});
		wx.navigateBack({
			delta: 1
		})
	},
	personal() {
		wx.navigateBack({
			delta: 1
		})
	},
	newHouse() {
		wx.navigateTo({
			url: "/pages/home/newHouseList/newHouseList"
		})
	},
	collect(){
		if(this.data.collect){
			this.setData({
				collect:false
			});
			wx.showToast({
				title:"取消收藏成功",
				icon:"none"
			})
		}else{
			this.setData({
				collect:true
			});
			wx.showToast({
				title:"收藏成功",
				icon:"none"
			})
		}
	},
previewImage(){
	let that=this;
	wx.previewImage({
		urls:that.data.images
	})
},
	other(){
		wx.navigateTo({
			url:'other/other'
		})
	},
	complain(){
		wx.navigateTo({
			url:'complain/complain'
		})
	},
	onLoad(options) {
		console.log(options)
		// 传递参数动态修改标题
		// wx.setNavigationBarTitle({
		// 	title: '动态修改标题'
		// })
	},
	deal(){
		wx.navigateTo({
			url:'dealDetail/dealDetail'
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
