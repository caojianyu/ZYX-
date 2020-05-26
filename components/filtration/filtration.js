Component({
	properties: {
		filtration: {
			type: Array,
			value: []
		}
	},
	data: {
		isShow: false,
		isColor:-1,
		isColor1:-1,
		isColor2:-1,
		currentShow: -1,
		currentArea: 0,
		currentUse: 0,
		currentProce: 0,
		currentAveragePrice: true,
		totalAveragePrice: false,
		averageColor: 0,
		totalColor: 0,
		titleName: ["", "", ""],
		priceDetail: 0,
		subAreaIsShow: false,
		subArea: "",
		currentSubArea:0,
		areas: [
			"不限",
			"武侯区",
			"青羊区",
			"锦江区",
			"区域2"
		],
		// 筛选条件
		title: [
			"区域",
			"价格",
			"用途"
		],
		//提交的数据
		submitData: {
			area: '',
			price: 0,
			use: ''
		},
		// 价格
		price: [
			"均价",
			"总价"
		],
		averagePrice: [
			"不限",
			"8000以下",
			"8000-15000元",
			"15000-20000元",
			"15000-20000元",
			"20000-25000元",
			"25000-35000元",
			"35000-50000元",
			"50000以上",
		],
		totalPrice: [
			"不限",
			"30万以下",
			"30-50万",
			"50-100万",
			"100-150万",
			"150-200万",
			"200-250万",
			"250-300万",
			"300万以上"
		],
		use: [
			"不限",
			"住宅",
			"别墅",
			"商铺",
			"写字楼",
			"旅游地产"
		]
	},
	methods: {
		title(e) {
			if (this.data.currentShow == e.currentTarget.dataset.index) {
				this.setData({
					currentShow: -1
				})
			} else {
				this.setData({
					currentShow: e.currentTarget.dataset.index
				})
			}
		},
		currentArea(e) {
			let index=e.currentTarget.dataset.index
			let currentTilt='title['+0+']'
			this.setData({
				currentArea: e.currentTarget.dataset.index,
				[currentTilt]:this.data.areas[index],
				currentShow:-1,
				isColor:0
			})
		},
		// 价格选择
		currentProce(e) {
			this.setData({
				currentProce: e.currentTarget.dataset.index,
				submitData: {
					price: this.data.price[e.currentTarget.dataset.index]
				}
			})
			if (e.currentTarget.dataset.index == 1) {
				this.setData({
					currentAveragePrice: false,
					totalAveragePrice: true
				})
			} else {
				this.setData({
					currentAveragePrice: true,
					totalAveragePrice: false
				})
			}
		},
		averagePrice(e) {
			this.setData({
				averageColor: e.currentTarget.dataset.index
			})
			var currentTitle='title['+1+']'
			this.setData({
				[currentTitle]:this.data.averagePrice[this.data.averageColor],
				currentShow:-1,
				isColor1:1
			})
			
		},
		totalPrice(e) {
			this.setData({
				totalColor: e.currentTarget.dataset.index,
			})
			var currentTitle='title['+1+']'
			this.setData({
				[currentTitle]:this.data.totalPrice[this.data.totalColor],
				currentShow:-1,
			})
		},
		// 用途选择
		currentUse(e) {
			console.log(e.currentTarget.dataset.index)
			if(e.currentTarget.dataset.index==0){
				this.setData({
					isColor2: -2
				})
			}
			this.setData({
				currentUse: e.currentTarget.dataset.index,
				submitData: {
					use: this.data.use[e.currentTarget.dataset.index]
				}
			})
			//用途的索引2
			let newTitle = []
			for (let i = 0; i < this.data.title.length; i++) {
				if (i != 2) {
					newTitle.push(this.data.title[i])
				} else {
					newTitle.push(this.data.submitData.use)
				}
			}
			this.setData({
				title: newTitle,
				currentShow: -2,
				isColor2:2
			})
		},
		confirm(){
			this.setData({
				currentShow: -2
			})
		}
	}
})
