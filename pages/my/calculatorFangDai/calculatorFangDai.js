(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesTool/calculatorFangDai/calculatorFangDai" ], {
    1497: function(t, e, i) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        i.d(e, "b", function() {
            return a;
        }), i.d(e, "c", function() {
            return r;
        }), i.d(e, "a", function() {});
    },
    2093: function(t, e, i) {
        i.r(e);
        var a = i("1497"), r = i("96c4");
        for (var n in r) "default" !== n && function(t) {
            i.d(e, t, function() {
                return r[t];
            });
        }(n);
        i("340b");
        var o = i("f0c5"), u = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "28e1": function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6bb4"), i("921b"), e(i("66fd")), t(e(i("2093")).default);
        }).call(this, i("543d").createPage);
    },
    "340b": function(t, e, i) {
        var a = i("e1ea");
        i.n(a).a;
    },
    9030: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i("60c6"), r = 1e4, n = {
                data: function() {
                    return {
                        topTab: [ {
                            text: "公积金贷款",
                            event: "commonCalculator",
                            width: "38%",
                            index: 1
                        }, {
                            text: "商业贷款",
                            event: "businessCalculator",
                            width: "38%",
                            index: 0
                        }, {
                            text: "组合贷款",
                            event: "groupCalculator",
                            width: "38%",
                            index: 2
                        } ],
                        topTabCurrentIndex: 1,
                        rightArrow: "http://cdn.haofang.net/static/kdbweb/zdzfminiapp/zdzfPlatform/common/icon_jt.png",
                        everyBtnTextBeiFenBiVal: "",
                        swiperHeight: "100%",
                        firstPayTextMapIndex: 1,
                        firstPayPriceNumber: 0,
                        firstPayTextMap: {
                            1: {
                                title: "首付比例",
                                des: "自定义首付金额"
                            },
                            2: {
                                title: "首付金额",
                                des: "切换首付比例"
                            }
                        },
                        formData: {
                            0: {
                                totalPrice: "100",
                                firstPayPrice: "",
                                daiKuanPrice: "",
                                yearNum: "",
                                business_liLv: "",
                                monthPrice: "",
                                liXiPrice: "",
                                monthLessPrice: ""
                            },
                            1: {
                                totalPrice: "100",
                                firstPayPrice: "",
                                daiKuanPrice: "",
                                yearNum: "",
                                common_liLv: "",
                                monthPrice: "",
                                liXiPrice: "",
                                monthLessPrice: ""
                            },
                            2: {
                                totalPrice: "100",
                                firstPayPrice: "",
                                daiKuanPrice: "",
                                businessPrice: "",
                                commonPrice: "",
                                yearNum: "",
                                business_liLv: "",
                                common_liLv: "",
                                monthPrice: "",
                                liXiPrice: "",
                                monthLessPrice: ""
                            },
                            3: {
                                houseArea: "",
                                unitPrice: "",
                                houseType: "",
                                firstBuy: 1,
                                totalPrice: "",
                                houseOldPrice: "",
                                jiSuanMethod: "",
                                buyYear: "",
                                onlyHouse: 1,
                                qiShui: "",
                                gongZhengShui: "",
                                weiTuoChanPanShouXuFei: "",
                                buyMaiShouXuFei: "",
                                weiXiuJiJinFei: "",
                                shuiFeiTotal: "",
                                gongBenYinHuaShui: "",
                                yinHuaShui: "",
                                mySuoDeShui: "",
                                zengZhiShui: "",
                                zongHeDiJiaShui: ""
                            }
                        },
                        firstPickerIndex: 2,
                        firstPayPickerArr: [ {
                            text: "1成",
                            value: .1
                        }, {
                            text: "2成",
                            value: .2
                        }, {
                            text: "3成",
                            value: .3
                        }, {
                            text: "4成",
                            value: .4
                        }, {
                            text: "5成",
                            value: .5
                        }, {
                            text: "6成",
                            value: .6
                        }, {
                            text: "7成",
                            value: .7
                        }, {
                            text: "8成",
                            value: .8
                        }, {
                            text: "9成",
                            value: .9
                        } ],
                        firstPayVal: "",
                        yearNumIndex: 19,
                        yearNumPickerArr: [],
                        yearNumVal: "",
                        liLvPickerArr: [ {
                            text: "基准利率",
                            value: "1"
                        }, {
                            text: "7折",
                            value: "0.7"
                        }, {
                            text: "7.5折",
                            value: "0.75"
                        }, {
                            text: "8折",
                            value: "0.8"
                        }, {
                            text: "8.5折",
                            value: "0.85"
                        }, {
                            text: "9折",
                            value: "0.9"
                        }, {
                            text: "1.05倍",
                            value: "1.05"
                        }, {
                            text: "1.1倍",
                            value: "1.1"
                        }, {
                            text: "1.2倍",
                            value: "1.2"
                        }, {
                            text: "1.3倍",
                            value: "1.3"
                        } ],
                        businessLiLvIndex: 0,
                        businessLiLvVal: "",
                        commonLiLvIndex: 0,
                        commonLiLvVal: "",
                        resultTabCurrentType: 1,
                        startCalculatorMap: {
                            0: !1,
                            1: !1,
                            2: !1,
                            3: !1
                        },
                        newErHouseTabIndex: 1,
                        houseTypePickerArr: [ {
                            text: "普通住宅",
                            value: "1"
                        }, {
                            text: "非普通住宅",
                            value: "2"
                        }, {
                            text: "经济适用房",
                            value: "3"
                        } ],
                        houseTypeIndex: 0,
                        houseTypeVal: "",
                        jiSuanMethodPickerArr: [ {
                            text: "总价",
                            value: "1"
                        }, {
                            text: "差价",
                            value: "2"
                        } ],
                        jiSuanMethodIndex: 0,
                        jiSuanMethodVal: "",
                        buyYearPickerArr: [ {
                            text: "满2年",
                            value: "1"
                        }, {
                            text: "满5年",
                            value: "2"
                        }, {
                            text: "不满2年",
                            value: "3"
                        } ],
                        buyYearIndex: 0,
                        buyYearVal: "",
                        firstPayToastViewShow: !1,
                        yearNumToastViewShow: !1,
                        businessLiLvToastViewShow: !1,
                        commonLiLvToastViewShow: !1,
                        private: {
                            businessLiLvBiLi: .049,
                            commonLiLvBiLi: .0325,
                            pickerChangeIndex: 0
                        }
                    };
                },
                onShareAppMessage: function() {
                    return new this.ShareAppMessage().init();
                },
                onLoad: function(t) {
                    if (t.price) {
                        var e = this.formData;
                        for (var i in e) e[i] && void 0 != e[i].totalPrice && (e[i].totalPrice = Number(t.price));
                        this.formData = e;
                    }
                    this.initData(), this.initTopBarBtnTextBaiFenBi();
                },
                onShow: function() {
                    new this.SetMetaInfo().initDefault();
                },
                onReady: function() {
                    new this.SetH5BrowerTitle().init();
                },
                methods: {
                    setData: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        for (var e in t) this[e] = t[e];
                    },
                    initData: function() {
                        this.changeTopBar(1, !0);
                    },
                    initYearNumPickerArr: function() {
                        for (var t = [], e = 1; e <= 30; e++) t.push({
                            text: e + "年 ( " + 12 * e + "期 )",
                            value: e
                        });
                        this.setData({
                            yearNumPickerArr: t
                        });
                    },
                    initTopBarBtnTextBaiFenBi: function() {
                        for (var t = this.topTab, e = 0, i = 0; i < t.length; i++) e += t[i].text.length;
                        for (var a = (100 / e).toFixed(1), r = 0; r < t.length; r++) t[r].width = parseInt(a * t[r].text.length) + "%";
                        this.setData({
                            everyBtnTextBeiFenBiVal: a,
                            topTab: t
                        });
                    },
                    changeTopBar: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (Number(t) !== Number(this.topTabCurrentIndex) || e) {
                            this.setData({
                                topTabCurrentIndex: t
                            }), 3 !== Number(this.topTabCurrentIndex) ? (this.upFirstPayVal(), this.initYearNumPickerArr(), 
                            this.upYearNumVal()) : (this.upHouseTypeVal(), this.upJiSuanMethodVal(), this.upBuyYearVal());
                            var i = {
                                0: {
                                    liLv: "businessLiLvBiLi",
                                    liLvIndex: "businessLiLvIndex"
                                },
                                1: {
                                    liLv: "commonLiLvBiLi",
                                    liLvIndex: "commonLiLvIndex"
                                }
                            };
                            !i[this.topTabCurrentIndex] || 0 !== Number(this.topTabCurrentIndex) && 1 !== Number(this.topTabCurrentIndex) || this.upLiLvVal(this.private[i[this.topTabCurrentIndex].liLv], this[i[this.topTabCurrentIndex].liLvIndex]), 
                            2 === Number(this.topTabCurrentIndex) && (this.upLiLvVal(this.private.businessLiLvBiLi, this.businessLiLvIndex), 
                            this.upLiLvVal(this.private.commonLiLvBiLi, this.commonLiLvIndex)), this.startCalculatorMap[this.topTabCurrentIndex] && this.startCalculation(!1);
                        }
                    },
                    changeFirstPayType: function() {
                        var t = this.firstPayTextMapIndex;
                        t = 2, this.firstPayPriceInputChange({
                            detail: {
                                value: this.firstPayPriceNumber || ""
                            }
                        }), 2 === this.firstPayTextMapIndex && (this.upFirstPayVal(), t = 1), this.setData({
                            firstPayTextMapIndex: t
                        });
                    },
                    totalPriceInputChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].totalPrice = t.detail.value, this.setData({
                            formData: e
                        }), this.upFirstPayVal();
                    },
                    groupBusinessInputChange: function(t) {
                        var e = this.formData, i = this.topTabCurrentIndex, a = this.formData[i].daiKuanPrice;
                        if (!this.checkGroupInputValIsNeed(t.detail.value || 0, e[i].commonPrice || 0)) return e[this.topTabCurrentIndex].businessPrice = "", 
                        void this.setData({
                            formData: e
                        });
                        e[this.topTabCurrentIndex].businessPrice = t.detail.value, e[this.topTabCurrentIndex].commonPrice = Number(a) - Number(t.detail.value), 
                        this.setData({
                            formData: e
                        });
                    },
                    groupCommonInputChange: function(t) {
                        var e = this.formData, i = this.topTabCurrentIndex, a = this.formData[i].daiKuanPrice;
                        if (!this.checkGroupInputValIsNeed(e[i].businessPrice || 0, t.detail.value || 0)) return e[this.topTabCurrentIndex].commonPrice = "", 
                        void this.setData({
                            formData: e
                        });
                        e[i].commonPrice = t.detail.value, e[this.topTabCurrentIndex].businessPrice = Number(a) - Number(t.detail.value), 
                        this.setData({
                            formData: e
                        });
                    },
                    checkGroupInputValIsNeed: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = this.formData[this.topTabCurrentIndex].daiKuanPrice;
                        return !(Number(a) < Number(e) || Number(a) < Number(i)) || (t.showToast({
                            title: "小于等于" + a + "万",
                            icon: "none",
                            duration: 2e3
                        }), !1);
                    },
                    taxationAreaInputChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].houseArea = t.detail.value, this.setData({
                            formData: e
                        });
                    },
                    taxationUnitPriceInputChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].unitPrice = t.detail.value, this.setData({
                            formData: e
                        });
                    },
                    taxationHouseOldPriceInputChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].houseOldPrice = t.detail.value, this.setData({
                            formData: e
                        });
                    },
                    firstPayPickerChange: function(t) {
                        this.private.pickerChangeIndex = t.detail.value[0];
                    },
                    upFirstPayVal: function() {
                        var t = this.firstPayPickerArr[this.firstPickerIndex], e = this.formData[this.topTabCurrentIndex].totalPrice || 0, i = this.formData, a = i[this.topTabCurrentIndex].businessPrice ? Number(i[this.topTabCurrentIndex].businessPrice) : 0;
                        i[this.topTabCurrentIndex].firstPayPrice = (e * t.value).toFixed(1), i[this.topTabCurrentIndex].daiKuanPrice = (e - i[this.topTabCurrentIndex].firstPayPrice).toFixed(1), 
                        2 === this.topTabCurrentIndex && (i[this.topTabCurrentIndex].commonPrice = Number(i[this.topTabCurrentIndex].daiKuanPrice) - Number(a)), 
                        this.setData({
                            formData: i,
                            firstPayVal: t.text,
                            firstPayPriceNumber: i[this.topTabCurrentIndex].firstPayPrice
                        });
                    },
                    firstPayPriceInputChange: function(e) {
                        var i = this.formData[this.topTabCurrentIndex].totalPrice || 0, a = e.detail.value || "", r = this.formData, n = this.topTabCurrentIndex, o = r[this.topTabCurrentIndex].businessPrice ? Number(r[this.topTabCurrentIndex].businessPrice) : 0;
                        return a ? (a = Number(a)) > Number(i) ? (r[this.topTabCurrentIndex].daiKuanPrice = 0, 
                        2 === this.topTabCurrentIndex && (r[this.topTabCurrentIndex].commonPrice = 0, r[this.topTabCurrentIndex].businessPrice = 0), 
                        t.showToast({
                            title: "首付应小于总价",
                            icon: "none",
                            duration: 2e3
                        }), r[n].firstPayPrice = i, void this.setData({
                            firstPayPriceNumber: i,
                            formData: r
                        })) : (r[this.topTabCurrentIndex].daiKuanPrice = (i - a).toFixed(1), 2 === this.topTabCurrentIndex && (r[this.topTabCurrentIndex].commonPrice = Number(r[this.topTabCurrentIndex].daiKuanPrice) - Number(o)), 
                        r[n].firstPayPrice = a, void this.setData({
                            firstPayPriceNumber: a,
                            formData: r
                        })) : (r[n].firstPayPrice = "", void this.setData({
                            firstPayPriceNumber: "",
                            formData: r
                        }));
                    },
                    yearNumPickerChange: function(t) {
                        this.setData({
                            yearNumIndex: t.detail.value
                        }), this.upYearNumVal();
                    },
                    upYearNumVal: function() {
                        var t = this.yearNumPickerArr[this.yearNumIndex], e = this.formData;
                        e[this.topTabCurrentIndex].yearNum = t.value, this.setData({
                            yearNumVal: t.text,
                            formData: e
                        });
                    },
                    businessLiLvPickerChange: function(t) {
                        this.setData({
                            businessLiLvIndex: t.detail.value
                        }), this.upLiLvVal(this.private.businessLiLvBiLi, t.detail.value);
                    },
                    commonLiLvPickerChange: function(t) {
                        this.setData({
                            commonLiLvIndex: t.detail.value
                        }), this.upLiLvVal(this.private.commonLiLvBiLi, t.detail.value);
                    },
                    upLiLvVal: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.private.businessLiLvBiLi, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.businessLiLvIndex, i = this.liLvPickerArr[e], a = this.formData;
                        if (this.private.businessLiLvBiLi === t) return a[this.topTabCurrentIndex].business_liLv = parseFloat(i.value) * parseFloat(t) * 100, 
                        a[this.topTabCurrentIndex].business_liLv = a[this.topTabCurrentIndex].business_liLv.toFixed(2), 
                        void this.setData({
                            businessLiLvVal: i.text,
                            formData: a
                        });
                        a[this.topTabCurrentIndex].common_liLv = parseFloat(i.value) * parseFloat(t) * 100, 
                        a[this.topTabCurrentIndex].common_liLv = a[this.topTabCurrentIndex].common_liLv.toFixed(2), 
                        this.setData({
                            commonLiLvVal: i.text,
                            formData: a
                        });
                    },
                    houseTypePickerChange: function(t) {
                        this.setData({
                            houseTypeIndex: t.detail.value
                        }), this.upHouseTypeVal();
                    },
                    upHouseTypeVal: function() {
                        var t = this.houseTypeIndex, e = this.topTabCurrentIndex, i = this.houseTypePickerArr[t], a = this.formData;
                        a[e].houseType = i.value, this.setData({
                            formData: a,
                            houseTypeVal: i.text
                        });
                    },
                    jiSuanMethodPickerChange: function(t) {
                        this.setData({
                            jiSuanMethodIndex: t.detail.value
                        }), this.upJiSuanMethodVal();
                    },
                    upJiSuanMethodVal: function() {
                        var t = this.jiSuanMethodIndex, e = this.topTabCurrentIndex, i = this.jiSuanMethodPickerArr[t], a = this.formData;
                        a[e].jiSuanMethod = i.value, this.setData({
                            formData: a,
                            jiSuanMethodVal: i.text
                        });
                    },
                    buyYearPickerChange: function(t) {
                        this.setData({
                            buyYearIndex: t.detail.value
                        }), this.upBuyYearVal();
                    },
                    upBuyYearVal: function() {
                        var t = this.buyYearIndex, e = this.topTabCurrentIndex, i = this.buyYearPickerArr[t], a = this.formData;
                        a[e].buyYear = i.value, this.setData({
                            formData: a,
                            buyYearVal: i.text
                        });
                    },
                    resultTabChange: function(t) {
                        var e = t;
                        this.setData({
                            resultTabCurrentType: e
                        }), 1 !== Number(e) ? this.upBenJinResult() : this.upBenXiResult();
                    },
                    newErHouseTabChange: function(t) {
                        var e = t.target.dataset.type;
                        Number(e) !== Number(this.newErHouseTabIndex) && (this.setData({
                            newErHouseTabIndex: e
                        }), 1 !== Number(e) ? this.erHouseTaxation() : this.newHouseTaxation());
                    },
                    firstBuyRadioChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].firstBuy = t.detail.value, this.setData({
                            formData: e
                        });
                    },
                    onlyHouseRadioChange: function(t) {
                        var e = this.formData;
                        e[this.topTabCurrentIndex].onlyHouse = t.detail.value, this.setData({
                            formData: e
                        });
                    },
                    startCalculation: function() {
                        var e = this, i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], a = this.topTabCurrentIndex, r = this.startCalculatorMap, n = this.formData;
                        if (2 !== Number(a) || n[a].businessPrice || n[a].commonPrice) {
                            if (3 !== Number(a) || this.checkTaxIsNeed()) {
                                r[a] = !0, this.setData({
                                    startCalculatorMap: r,
                                    resultTabCurrentType: 1
                                });
                                for (var o = {
                                    0: [ "upBenXiResult" ],
                                    1: [ "upBenXiResult" ],
                                    2: [ "upBenXiResult" ],
                                    3: [ "newHouseTaxation" ]
                                }[a], u = 0; u < o.length; u++) this[o[u]]();
                                if (i) {
                                    var s = this.DifferenceApi.createSelectorQuery(this);
                                    s.select(".contentScrollView").boundingClientRect(), s.selectViewport().scrollOffset(), 
                                    s.exec(function(e) {
                                        setTimeout(function() {
                                            t.pageScrollTo({
                                                scrollTop: e[0].height + e[0].top,
                                                duration: 0
                                            }, 300);
                                        });
                                    });
                                }
                                setTimeout(function() {
                                    e.resultTabChange(1);
                                }, 500);
                            }
                        } else t.showToast({
                            title: "请输入贷款金额",
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    checkTaxIsNeed: function() {
                        for (var e = {
                            1: [ {
                                key: "houseArea",
                                msg: "请输入面积"
                            }, {
                                key: "unitPrice",
                                msg: "请输入单价"
                            } ],
                            2: [ {
                                key: "houseArea",
                                msg: "请输入面积"
                            }, {
                                key: "unitPrice",
                                msg: "请输入单价"
                            }, {
                                key: "houseOldPrice",
                                msg: "请输入原价"
                            } ]
                        }, i = this.newErHouseTabIndex, a = this.formData, r = this.topTabCurrentIndex, n = e[i], o = 0; o < n.length; o++) {
                            var u = n[o];
                            if (!a[r][u.key]) return t.showToast({
                                title: u.msg,
                                icon: "none",
                                duration: 1500
                            }), !1;
                        }
                        return !0;
                    },
                    upBenXiResult: function() {
                        this[{
                            0: "benXiBusinessCalculator",
                            1: "benXiCommonCalculator",
                            2: "benXiGroupCalculator"
                        }[this.topTabCurrentIndex]](), this.upEchartNoZuHe();
                    },
                    benXiBusinessCalculator: function() {
                        var t = this.formData;
                        t[this.topTabCurrentIndex].monthPrice = this.getBenXiYearPrice(), t[this.topTabCurrentIndex].liXiPrice = ((t[this.topTabCurrentIndex].monthPrice * t[this.topTabCurrentIndex].yearNum * 12 - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    benXiCommonCalculator: function() {
                        var t = this.formData;
                        t[this.topTabCurrentIndex].monthPrice = this.getBenXiYearPrice(this.formData[this.topTabCurrentIndex].daiKuanPrice, "common_liLv"), 
                        t[this.topTabCurrentIndex].liXiPrice = ((t[this.topTabCurrentIndex].monthPrice * t[this.topTabCurrentIndex].yearNum * 12 - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    benXiGroupCalculator: function() {
                        var t = this.formData;
                        t[this.topTabCurrentIndex].monthPrice = Number(this.getBenXiYearPrice(this.formData[this.topTabCurrentIndex].businessPrice, "business_liLv")) + Number(this.getBenXiYearPrice(this.formData[this.topTabCurrentIndex].commonPrice, "common_liLv")), 
                        t[this.topTabCurrentIndex].liXiPrice = ((t[this.topTabCurrentIndex].monthPrice * t[this.topTabCurrentIndex].yearNum * 12 - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    getBenXiYearPrice: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.formData[this.topTabCurrentIndex].daiKuanPrice, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "business_liLv", i = this.formData, a = .01 * i[this.topTabCurrentIndex][e], n = t * r, o = 12 * i[this.topTabCurrentIndex].yearNum, u = a / 12;
                        return (n * u * Math.pow(1 + u, o) / (Math.pow(1 + u, o) - 1) * 1e3 / 1e3).toFixed(1);
                    },
                    upBenJinResult: function() {
                        this[{
                            0: "benJinBusinessCalculator",
                            1: "benJinCommonCalculator",
                            2: "benJinGroupCalculator"
                        }[this.topTabCurrentIndex]](), this.upEchartNoZuHe();
                    },
                    benJinBusinessCalculator: function() {
                        for (var t = this.formData, e = 12 * t[this.topTabCurrentIndex].yearNum, i = 0, a = 0, n = 0, o = 0, u = 0; u < e; u++) o += i = this.getBenJinYearPrice(u), 
                        0 !== u ? 1 === u && (n = i) : a = i;
                        t[this.topTabCurrentIndex].monthPrice = a.toFixed(1), t[this.topTabCurrentIndex].liXiPrice = ((parseFloat(o) - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        t[this.topTabCurrentIndex].monthLessPrice = (parseFloat(a) - parseFloat(n)).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    benJinCommonCalculator: function() {
                        for (var t = this.formData, e = 12 * t[this.topTabCurrentIndex].yearNum, i = 0, a = 0, n = 0, o = 0, u = 0; u < e; u++) o += i = this.getBenJinYearPrice(u, this.formData[this.topTabCurrentIndex].daiKuanPrice, "common_liLv"), 
                        0 !== u ? 1 === u && (n = i) : a = i;
                        t[this.topTabCurrentIndex].monthPrice = a.toFixed(1), t[this.topTabCurrentIndex].liXiPrice = ((parseFloat(o) - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        t[this.topTabCurrentIndex].monthLessPrice = (parseFloat(a) - parseFloat(n)).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    benJinGroupCalculator: function() {
                        for (var t = this.formData, e = 12 * t[this.topTabCurrentIndex].yearNum, i = 0, a = 0, n = 0, o = 0, u = 0; u < e; u++) o += i = Number(this.getBenJinYearPrice(u, t[this.topTabCurrentIndex].businessPrice, "business_liLv")) + Number(this.getBenJinYearPrice(u, t[this.topTabCurrentIndex].commonPrice, "common_liLv")), 
                        0 !== u ? 1 === u && (n = i) : a = i;
                        t[this.topTabCurrentIndex].monthPrice = a.toFixed(1), t[this.topTabCurrentIndex].liXiPrice = ((parseFloat(o) - t[this.topTabCurrentIndex].daiKuanPrice * r) / r).toFixed(1), 
                        t[this.topTabCurrentIndex].monthLessPrice = (parseFloat(a) - parseFloat(n)).toFixed(1), 
                        this.setData({
                            formData: t
                        });
                    },
                    getBenJinYearPrice: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.formData[this.topTabCurrentIndex].daiKuanPrice, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "business_liLv", a = this.formData, n = .01 * a[this.topTabCurrentIndex][i] / 12, o = e * r, u = o / (12 * a[this.topTabCurrentIndex].yearNum);
                        return (o - u * t) * n + u;
                    },
                    newHouseTaxation: function() {
                        var t = this.formData, e = this.topTabCurrentIndex, i = Number(t[e].houseArea), a = (i * Number(t[e].unitPrice)).toFixed(1);
                        t[e].totalPrice = (a / r).toFixed(1), t[e].gongZhengShui = (.003 * a).toFixed(1), 
                        t[e].qiShui = (a * Number(this.getDeedTaxRate())).toFixed(1), t[e].weiTuoChanPanShouXuFei = (.003 * a).toFixed(1), 
                        t[e].buyMaiShouXuFei = Number(this.getDealHandlingCharge(i)).toFixed(1), t[e].weiXiuJiJinFei = (.03 * a).toFixed(1), 
                        t[e].shuiFeiTotal = (Number(t[e].gongZhengShui) + Number(t[e].qiShui) + Number(t[e].weiTuoChanPanShouXuFei) + Number(t[e].buyMaiShouXuFei) + Number(t[e].weiXiuJiJinFei)).toFixed(1), 
                        this.setData({
                            formData: t
                        }), this.upEchartNoZuHe();
                    },
                    getDeedTaxRate: function() {
                        var t = .03, e = this.formData, i = this.topTabCurrentIndex, a = Number(e[i].firstBuy), r = Number(e[i].houseType), n = e[i].houseArea;
                        e[i].unitPrice;
                        do {
                            if (2 === r) {
                                t = .03;
                                break;
                            }
                            if (1 !== r) {
                                t = .01;
                                break;
                            }
                            if (n >= 90 && 1 === a) {
                                t = .015;
                                break;
                            }
                            if (n >= 90) {
                                t = .015;
                                break;
                            }
                            if (n < 90 && 1 === a) {
                                t = .01;
                                break;
                            }
                            if (n < 90) {
                                t = .03;
                                break;
                            }
                        } while (0);
                        return t;
                    },
                    getDealHandlingCharge: function(t) {
                        return t <= 120 ? 500 : 1500;
                    },
                    erHouseTaxation: function() {
                        var t = this.formData, e = this.topTabCurrentIndex, i = (Number(t[e].houseArea) * Number(t[e].unitPrice)).toFixed(1);
                        t[e].totalPrice = (i / r).toFixed(1), t[e].gongBenYinHuaShui = 5, t[e].yinHuaShui = 0, 
                        t[e].qiShui = (i * Number(this.getDeedTaxRate())).toFixed(1), t[e].mySuoDeShui = this.getIndividualIncomeTax(i).toFixed(1), 
                        t[e].zengZhiShui = this.getAddedValueTax(i).toFixed(1), t[e].zongHeDiJiaShui = this.getLandTransferringFees(i).toFixed(1), 
                        t[e].shuiFeiTotal = (Number(t[e].gongBenYinHuaShui) + Number(t[e].qiShui) + Number(t[e].mySuoDeShui) + Number(t[e].zengZhiShui) + Number(t[e].zongHeDiJiaShui)).toFixed(1), 
                        this.setData({
                            formData: t
                        }), this.upEchartNoZuHe();
                    },
                    getIndividualIncomeTax: function(t) {
                        var e = this.formData, i = this.topTabCurrentIndex, a = Number(e[i].jiSuanMethod), n = Number(e[i].buyYear), o = Number(e[i].houseOldPrice) * r;
                        if (2 === n) return 0;
                        if (1 === a) return .01 * t;
                        var u = t - o;
                        return u < 0 ? 0 : .2 * u;
                    },
                    getAddedValueTax: function(t) {
                        var e = this.formData, i = this.topTabCurrentIndex;
                        return 3 !== Number(e[i].buyYear) ? 0 : .0556 * t;
                    },
                    getLandTransferringFees: function(t) {
                        return .01 * t;
                    },
                    upEchartNoZuHe: function() {
                        var t = {
                            0: "pieChartId",
                            1: "common_pieChartId",
                            2: "group_pieChartId",
                            3: "newHouse_pieChartId"
                        }[this.topTabCurrentIndex], e = this.formData, i = [ {
                            data: parseInt(e[this.topTabCurrentIndex].liXiPrice),
                            color: "#f6cf41"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].daiKuanPrice),
                            color: "#5da8fe"
                        } ];
                        3 === Number(this.topTabCurrentIndex) && 1 === Number(this.newErHouseTabIndex) && (i = [ {
                            data: parseInt(e[this.topTabCurrentIndex].gongZhengShui),
                            color: "#6ebfff"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].qiShui),
                            color: "#ff70a0"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].weiTuoChanPanShouXuFei),
                            color: "#c3eaa4"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].buyMaiShouXuFei),
                            color: "#3a61a8"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].weiXiuJiJinFei),
                            color: "#b0753a"
                        } ]), 3 === Number(this.topTabCurrentIndex) && 2 === Number(this.newErHouseTabIndex) && (i = [ {
                            data: parseInt(e[this.topTabCurrentIndex].gongBenYinHuaShui),
                            color: "#ff70a0"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].yinHuaShui),
                            color: "#ffda7c"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].qiShui),
                            color: "#6ebfff"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].mySuoDeShui),
                            color: "#c3eaa4"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].zengZhiShui),
                            color: "#3a61a8"
                        }, {
                            data: parseInt(e[this.topTabCurrentIndex].zongHeDiJiaShui),
                            color: "#b0753a"
                        } ]), new a({
                            canvasId: t,
                            type: "ring",
                            series: i,
                            background: "#ffffff",
                            disablePieStroke: !0,
                            animation: !1,
                            width: 150,
                            height: 150,
                            dataLabel: !1,
                            legend: !1,
                            extra: {
                                pie: {
                                    offsetAngle: -90
                                },
                                ringWidth: 32
                            }
                        });
                    },
                    lookResDetail: function() {
                        console.log("计算结果详情");
                    },
                    cancelToast: function(t) {
                        if (t) {
                            var e = {};
                            e[t] = !1, this.setData(e);
                        }
                    },
                    confirmToast: function(t) {
                        t && (this.cancelToast(t), this[{
                            firstPayToastViewShow: "firstPayToastEvent",
                            yearNumToastViewShow: "yearNumToastEvent",
                            businessLiLvToastViewShow: "businessLiLvToastEvent",
                            commonLiLvToastViewShow: "commonLiLvToastEvent"
                        }[t]]());
                    },
                    showToast: function(t) {
                        if (t) {
                            var e = {};
                            e[t] = !0, this.setData(e);
                        }
                    },
                    toastPickerChange: function(t) {
                        this.private.pickerChangeIndex = t.detail.value[0];
                    },
                    firstPayToastEvent: function() {
                        var t = this.private.pickerChangeIndex;
                        this.setData({
                            firstPickerIndex: t
                        }), this.upFirstPayVal();
                    },
                    yearNumToastEvent: function() {
                        var t = this.private.pickerChangeIndex;
                        this.setData({
                            yearNumIndex: t
                        }), this.upYearNumVal();
                    },
                    businessLiLvToastEvent: function() {
                        var t = this.private.pickerChangeIndex;
                        this.setData({
                            businessLiLvIndex: t
                        }), this.upLiLvVal(this.private.businessLiLvBiLi, t);
                    },
                    commonLiLvToastEvent: function() {
                        var t = this.private.pickerChangeIndex;
                        this.setData({
                            commonLiLvIndex: t
                        }), this.upLiLvVal(this.private.commonLiLvBiLi, t);
                    }
                }
            };
            e.default = n;
        }).call(this, i("543d").default);
    },
    "96c4": function(t, e, i) {
        i.r(e);
        var a = i("9030"), r = i.n(a);
        for (var n in a) "default" !== n && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = r.a;
    },
    e1ea: function(t, e, i) {}
}, [ [ "28e1", "common/runtime", "common/vendor" ] ] ]);