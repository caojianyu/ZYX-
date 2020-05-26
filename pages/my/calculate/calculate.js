import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);

	var option = {
		backgroundColor: "#ffffff",
		color: ["#ffb44a", "#32C5E9"],
		series: [{
			label: {
				normal: {
					fontSize: 11
				}
			},
			labelLine: {
				show: false
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['28%', '60%'],
			data: [{
				value: 55
			}, {
				value: 20,
			}]
		}]
	};

	chart.setOption(option);
	return chart;
}
Page({
	data: {
		ec: {
			onInit: initChart
		},
		isBootomShow: false,
		curentChoose: true,
		isShow: 0,
		index: 0,
		ageLimitShow: false,
		accumulationFundShow: false,
		sellPrice: false,
		// 房屋售价
		value: "100",
		// 首付金额
		value1: "",
		total: 90,
		year: 0,
		rate: 0,
		toggle: false,
		downPayment: false,
		hous: false,
		ageLimit: [
			"1年12期",
			"2年24期",
			"3年36期",
			"4年48期",
			"5年60期",
			"1年12期",
			"1年12期",
			"1年12期",
			"1年12期",
			"1年12期",
			"1年12期",
			"1年12期",
		],
		accumulationFund: [
			"基准利率",
			"7折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
			"7.5折",
		],
		type: [
			"公积金贷款",
			"商业贷款",
			"组合贷款"
		],
		c: [
			"1成",
			"2成",
			"3成",
			"4成",
			"5成",
			"6成",
			"7成",
			"8成",
			"9成",
		],
		foremData: {
			"shoujia": "",
			"shoufubile": "",
			"daikuanjine": "",
			"zhifulixi": "",
			"lilv": "3.25%",
			"yuegong": "",
			"meiyuedijian": "",
		}
	},

	submit() {
		this.setData({
			isBootomShow: !this.data.isBootomShow
		})
		if (this.data.isBootomShow) {
			wx.pageScrollTo({
				scrollTop: 230
			})
		}


		// 售价
		let shoujia = 'foremData.shoujia';
		this.setData({
			[shoujia]: this.data.value
		})
		// 金额
		let shoufubile = "foremData.shoufubili";
		this.setData({
			[shoufubile]: ((this.data.index + 1) / 10) * this.data.value
		})
		// 贷款总额
		let daikuanjine = "foremData.daikuanjine";
		this.setData({
			[daikuanjine]: this.data.total
		})
		// 利息
		let lixi = "foremData.zhifulixi"
		this.setData({
			[lixi]: ((this.data.total) * 0.0325 * (this.data.year + 1)).toFixed(2)
		})
		// 月供
		console.log(this.data.total)
		console.log(this.data.year)
		let yuegong = "foremData.yuegong"
		this.setData({
			[yuegong]: ((this.data.total + (this.data.total * 0.0325)) / ((parseInt(this.data.year) + 1) * 12)).toFixed(2)
		})
		console.log(this.data.foremData)

	},
	calculate(e) {
		this.setData({
			isShow: e.currentTarget.dataset.index
		})
	},
	choose() {
		this.setData({
			curentChoose: !this.data.curentChoose
		})
	},
	input(e) {
		console.log(e.detail.value) //value
		if (e.detail.value.length == 0) {
			this.setData({
				ageLimitShow: true,
			})
		} else {
			this.setData({
				ageLimitShow: false,
			})
		}
		if (!this.data.toggle) {
			let that = this;
			let num = parseInt(e.detail.value) - (parseInt() * ((this.data.index + 1) / 10))
			that.setData({
				total: num
			})
		}
	},
	change(e) {
		let num = parseInt(e.detail.value);
		let num1 = this.data.value - (this.data.value * ((num + 1) / 10))
		this.setData({
			index: num,
			total: num1
		})
	},
	year(e) {
		this.setData({
			year: e.detail.value
		})
	},
	rate(e) {
		this.setData({
			rate: e.detail.value
		})
	},
	toggle() {
		this.setData({
			toggle: !this.data.toggle
		})
	},
	downPayment(e) {
		console.log(e.detail.value) //value1
		if (e.detail.value.length == 0) {
			this.setData({
				downPayment: true,
			})
		} else {
			this.setData({
				downPayment: false,
			})
		}
	},
	hous(e) {
		if (e.detail.value.length == 0) {
			this.setData({
				hous: true,
			})
		} else {
			this.setData({
				hous: false,
			})
		}
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

	},
})
