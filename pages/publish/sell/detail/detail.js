Page({
	data: {
		//类目一
		titleIndex: 0,
		// 控制显示
		piker1: false,

		// 户型
		huxing: 0,
		// 朝向
		chaoxiang: 0,
		// 楼层
		louceng: 0,

		// 类目二
		titleIndex_2: 0,
		piker2: false,

		// 装修
		zhuangxiu: 0,
		// 供暖
		gongnuan: 0,
		// 电梯
		dianti: 0,

		total: "",
		sell: "",
		area: "",
		content: "",
		dong: "",
		danyuan: "",
		lou: "",
		hao: "",
		title: "",
		// 类目三
		piker3: false,
		titleIndex_3: 0,
		images: [],
		// 住宅
		zhuzhai: 0,
		// 商品
		shanpin: 0,
		// 产权
		chanquan: 0,
		name: "",
		number: "",
		formData: {
			piker: [{
					three: ["1室", "2室", "3室", "4室", "5室", "6室"],
					three1: ["0厅", "1厅", "2厅", "3厅", "4厅", "5厅", "6厅"],
					three2: ["0卫", "1卫", "2卫", "3卫", "4卫", "5卫"],
					one: "户型",
					two: "2室2厅1厅",
					one_1: "装修",
					two_1: "简单装修",
					one_2: "房屋类型",
					two_2: "普通住宅"
				},
				{
					three_1: ["东南", "西北", "东北", "南北", "东西", ],
					zhuangxiu: ["毛坯", "简单装修", "中等装修", "精装修", "豪华装修"],
					gongnuan: ["不供暖", "不想供暖", "凭啥供暖", "就不供暖"],
					dianti: ["有电梯", "无电梯", "有电梯", "有电梯", "有电梯", "有电梯"],
					one: "朝向",
					two: "南北",
					one_1: "供暖",
					two_1: "集中供暖",
					one_2: "产权类型",
					two_2: "商品房住宅"
				},
				{
					three_2: ["1层", "2层", "3层", "4层", "5层", "6层", "7层", "8层", "9层", "10层", "11层", "12层", ],
					treee_3: ["共1层", "共2层", "共3层", "共4层", "共5层", "共6层", "共7层", "共8层", "共9层", "共10层", "共11层", "共12层", "共13层", "共14层"],
					putong: ["普通住宅", "公寓", "别墅", "别墅", "别墅", "别墅", "别墅", "别墅"],
					shangpin: ["商品房", "公寓", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍", "宿舍"],
					nianxian: ["70年", "80年", "90年", "80年", "80年", "80年", "80年", "80年", "80年"],
					one: "楼层",
					two: "8/8",
					one_1: "电梯",
					two_1: "有电梯",
					one_2: "产权年限",
					two_2: "70年产权"
				}
			]
		}
	},

	picker1() {
		this.setData({
			piker1: true
		})
	},
	cancel1() {
		this.setData({
			piker1: false
		})
	},
	confirm1() {
		this.setData({
			piker1: false
		})
	},
	choose1(e) {
		this.setData({
			titleIndex: e.currentTarget.dataset.index
		})
	},
	bindchange1(e) {
		let val = 'formData.piker[0].two'
		this.setData({
			[val]: this.data.formData.piker[0].three[e.detail.value[0]] + this.data.formData.piker[0].three1[e.detail.value[
				1]] + this.data.formData.piker[0].three2[e.detail.value[2]]
		})
		this.setData({
			huxing: e.detail.value
		})
	},
	bindchange1_1(e) {
		let val = 'formData.piker[1].two'
		this.setData({
			[val]: this.data.formData.piker[1].three_1[e.detail.value[0]]
		})
		this.setData({
			chaoxiang: e.detail.value
		})
	},
	bindchange1_2(e) {
		this.setData({
			total: e.detail.value[1]
		})
		let val = 'formData.piker[2].two'
		this.setData({
			[val]: this.data.formData.piker[2].three_2[e.detail.value[0]] + '/' + this.data.formData.piker[2].treee_3[e.detail
				.value[1]]
		})
		this.setData({
			louceng: e.detail.value
		})
	},

	// 类目2
	picker2() {
		this.setData({
			piker2: true
		})
	},
	cancel2(e) {
		this.setData({
			piker2: false
		})
	},
	confirm2(e) {
		this.setData({
			piker2: false
		})
	},
	choose2(e) {
		this.setData({
			titleIndex_2: e.currentTarget.dataset.index
		})
	},
	bindchange2(e) {
		let val = 'formData.piker[0].two_1'
		this.setData({
			[val]: this.data.formData.piker[1].zhuangxiu[e.detail.value]
		})
		this.setData({
			zhuangxiu: e.detail.value
		})
	},
	bindchange2_1(e) {
		let val = 'formData.piker[1].two_1'
		this.setData({
			[val]: this.data.formData.piker[1].gongnuan[e.detail.value]
		})
		this.setData({
			gongnuan: e.detail.value
		})
	},
	bindchange2_2(e) {
		console.log(e.detail.value)
		let val = 'formData.piker[2].two_1'
		this.setData({
			[val]: this.data.formData.piker[1].dianti[e.detail.value]
		})
		this.setData({
			dianti: e.detail.value
		})
	},

	// l类目三
	picker3() {
		console.log(1)
		this.setData({
			piker3: true
		})
	},
	cancel3(e) {
		this.setData({
			piker3: false
		})
	},
	confirm3(e) {
		this.setData({
			piker3: false
		})
	},
	choose3(e) {
		this.setData({
			titleIndex_3: e.currentTarget.dataset.index
		})
	},
	bindchange3(e) {
		let val = 'formData.piker[0].two_2'
		this.setData({
			[val]: this.data.formData.piker[2].putong[e.detail.value]
		})
		this.setData({
			zhuzhai: e.detail.value
		})
	},
	bindchange3_1(e) {
		let val = 'formData.piker[1].two_2'
		this.setData({
			[val]: this.data.formData.piker[2].shangpin[e.detail.value]
		})
		this.setData({
			shanpin: e.detail.value
		})
	},
	bindchange3_2(e) {
		let val = 'formData.piker[2].two_2'
		this.setData({
			[val]: this.data.formData.piker[2].nianxian[e.detail.value]
		})
		this.setData({
			chanquan: e.detail.value
		})
	},

	inputSell(e) {
		this.setData({
			sell: e.detail.value
		})
		console.log(this.data.sell)
	},
	inputArea(e) {
		this.setData({
			area: e.detail.value
		})
		console.log(this.data.area)
	},
	content(e) {
		this.setData({
			content: e.detail.value
		})
		console.log(this.data.content)
	},
	dong(e) {
		this.setData({
			dong: e.detail.value
		})
		console.log(this.data.dong)
	},
	danyuan(e) {
		this.setData({
			danyuan: e.detail.value
		})
		console.log(this.data.danyuan)
	},
	lou(e) {
		this.setData({
			lou: e.detail.value
		})
		console.log(this.data.lou)
	},
	hao(e) {
		this.setData({
			hao: e.detail.value
		})
		console.log(this.data.hao)
	},
	title(e) {
		this.setData({
			title: e.detail.value
		})
	},
	chooseImage() {
		let that = this;
		wx.chooseImage({
			count: 9,
			success(res) {
				that.setData({
					images: that.data.images.concat(res.tempFilePaths)
				})
				console.log(that.data.images)
			}
		})
	},
	previewImage(e) {
		let index = e.currentTarget.dataset.index
		let that = this;
		wx.previewImage({
			urls: that.data.images,
			current: that.data.images[index]
		})
	},

	bindMultiPickerChange(e) {
		console.log(e)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},
	name(e) {
		this.setData({
			name: e.detail.value
		})
	},
	number(e) {
		this.setData({
			number: e.detail.value
		})
	},
	next() {
		// if (this.data.huxing == 0 || this.data.chaoxiang == 0 || this.data.louceng == 0 || this.data.zhuangxiu == 0 || this
		// 	.data.gongnuan == 0 || this.data.dianti == 0 || this.data.zhuzhai == 0 || this.data.shangpin == 0 || this.data.chanquan ==
		// 	0 || this.data.area == "" || this.data.sell == "" || this.data.content == "" || this.data.dong == "" || this.data.danyuan ==
		// 	"" || this.data.lou == "" || this.data.hao == "" || this.data.title == "") {
		// 	wx.showToast({
		// 		title: "请填写完整信息",
		// 		icon: "none"
		// 	})
		// 	return
		// }
		// if (this.data.title.length < 5 || this.data.title.length > 30) {
		// 	wx.showToast({
		// 		title: "标题字数不能少于5个字或大于30个字,请修改",
		// 		icon: "none"
		// 	})
		// 	return
		// }
		// let reg = /^[\u4E00-\u9FA5]+$/;
		// if (!reg.test(this.data.name)) {
		// 	wx.showToast({
		// 		title: '请输入正确的称呼',
		// 		icon: "none"
		// 	})
		// 	return
		// }
		// if(this.data.number.length<11){
		// 	wx.showToast({
		// 		title: '请输入正确手机号',
		// 		icon: "none"
		// 	})
		// 	return
		// }
		wx.navigateTo({
			url: 'entrust/entrust'
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
