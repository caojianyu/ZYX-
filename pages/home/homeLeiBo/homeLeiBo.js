// pages/home/homeLeiBo/homeLeiBo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mengban:0,
    titlearray:['','','',''],/** 搜索选项标题 */
    cdiqu: '',/** 地区选中标题*/
    cdiquindex: 0,/** 地区选中索引 */
    cjiage: '',/** 价格选中标题 */
    cjiageindex: 0,/** 价格选中索引 */
    chuxing: '',/** 户型选中标题 */
    chuxingindex: 0,/** 户型选中索引 */
    cmianji: '',/** 面积选中标题 */
    cmianjiindex: 0,/** 面积选中索引 */
    cleixing: '',/** 类型选中标题 */
    cleixingindex: 0,/** 类型选中索引 */
    showarray: [/** 展示某个搜索栏 */
      0,0,0,0
    ],
    mimg: [/**搜索页搜索框上方图片 */
      '../../../assets/home/Commis01.png',
      '../../../assets/home/Commis02.jpg'
    ],
    homeListItemFd: [
      {
        id: '1',
        zd:'1',
        img: '../../assets/home/homeListItem/01.png',
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '700000',
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
        number: '900000',
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
        number: '1450000',
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
        number: '900000',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: '../../assets/home/Headportrait/s04.png',
        type: '个人'
      }
    ],
    homeListItemYx: [
      {
        id: '1',
        zd:'1',
        img: '../../../assets/home/homeListItem/1231.jpg',
        title: '海港广场，精装标准套三出售，带家具家电靠地铁',
        stmel: '芙蓉区',
        stmels: '长房东立',
        number: '700000',
        specifications: '2室1厅',
        squaremeter: '67.7',
        homesuper: '精装修',
        avatar: '../../assets/home/Headportrait/s01.png',
        type: '个人'
      },
      {
        id: '2',
        img: '../../../assets/home/homeListItem/1231.jpg',
        title: '中心广场中心.领包入住，精装修房东直租',
        stmel: '开福区',
        stmels: '宽属大厦',
        number: '900000',
        specifications: '3室1厅',
        squaremeter: '77.7',
        homesuper: '精装修',
        avatar: '../../assets/home/Headportrait/s02.png',
        type: '个人'
      },
      {
        id: '3',
        img: '../../../assets/home/homeListItem/1231.jpg',
        title: '南儿街顶楼地段好地铁房双林小学 带花园',
        stmel: '梅溪湖',
        stmels: '鼎奥国际',
        number: '1450000',
        specifications: '2室',
        squaremeter: '127.7',
        homesuper: '精装修',
        avatar: '../../assets/home/Headportrait/s03.png',
        type: '个人'
      },
      {
        id: '4',
        img: '../../../assets/home/homeListItem/1231.jpg',
        title: '溪岛精装套三，靠地铁',
        stmel: '长沙县',
        stmels: '小遂溪岛',
        number: '900000',
        specifications: '3室1厅',
        homesuper: '精装修',
        squaremeter: '57.7',
        avatar: '../../assets/home/Headportrait/s04.png',
        type: '个人'
      }
    ],
    homeS: [
      {
        id: 1,
        title: '房主直卖'
      }, {
        id: 2,
        title: '优选房源'
      }
    ],
    currentInexs:0,
    currentInex:0,
    selectInex:0,
    dropList:[
      {
        id:1,
        img:"../../../assets/svg/Bottom.svg",
        title:"全部"
      },
      {
        id:2,
        img:"../../../assets/svg/Bottom.svg",
        title:"价格"
      },
      {
        id:3,
        img:"../../../assets/svg/Bottom.svg",
        title:"户型"
      },
      {
        id:4,
        img:"../../../assets/svg/Bottom.svg",
        title:"更多"
      }
    ],
    /**房东直租数据接口 */
  
    homeS:[
      {
        id:1,
        title:'房主直卖'
      },{
        id:2,
        title:'优选房源'
      }
    ],
    diqu:[
      '黑龙江',
      '长春',
      '哈尔滨',
      '黑龙江',
      '长春',
      '哈尔滨',
      '黑龙江',
      '长春',
      '哈尔滨',
    ],
    jiage: [
      '70万以下',
      '70-80万',
      '80-100万',
      '100-120万',
      '120-140万',
      '140-160万',
    ],
    huxing:[
      '1室',
      '2室',
      '3室',
      '4室',
      '5室',
      '5室以上'
    ],
    mianji:[
      '50以下',
      '50-70',
      '70-90',
      '90-110',
      '110以上',

    ],
    leixing:[
      '住宅',
      '别墅',
      '商铺',
      '写字楼',
      '其他',
    ]
  },
  onTaps:function(e){
    var nums= e.currentTarget.dataset.index;
    /**更新赋值 setData() */
    this.setData({
      showarray:[0,0,0,0],
      mengban:'0',
      titlearray:['','','',''],
      currentInexs:nums,
      /**数据源赋值 */
    });
    console.log(this.data.currentInexs)
   },
  /**导航标题联动 e是什么？log打印看看*/
  selectToggle:function(e){
    var num = e.currentTarget.dataset.index;
    this.setData({ showarray: [0, 0, 0, 0] ,
    mengban:1});
    if (num == 0) {
      this.setData({
        showarray: [1, 0, 0, 0]
      })
    } else if (num == 1) {
      this.setData({
        showarray: [0, 1, 0, 0]
      })
    } else if (num == 2) {
      this.setData({
        showarray: [0, 0, 1, 0]
      })
    } else if (num == 3) {
      this.setData({
        showarray: [0, 0, 0, 1]
      })
    };
    console.log(this.data.showarray);
   
   /**更新赋值 setData() */
   this.setData({
     currentInex:num
   }) 
  },
  /**选项选中 */
  select:function(e){
    var num = e.currentTarget.dataset.index;
    var type = e.currentTarget.dataset.type;
    if(type==0){
      this.setData({
        cdiquindex:num,
      })
    }else if(type==1){
        this.setData({
          cjiageindex:num,
        })
    } else if (type == 2) {
      this.setData({
        chuxingindex: num,
      })
    } else if (type == 3) {
      this.setData({
        cmianjiindex: num,
      })
    } else if (type == 4) {
      this.setData({
        cleixingindex: num,
      })
    }

  },
  /**地区确定 */
  diquok:function(e){
    this.setData({
      mengban: 0,
      cdiqu: this.data.diqu[this.data.cdiquindex]
    })
    this.setData({
      titlearray:[this.data.cdiqu,this.data.cjiage,this.data.chuxing,this.data.cmianji],
      showarray:[0,0,0,0]
    })
  },
  /**价格确定 */
  jiageok:function(e){
    this.setData({
      mengban: 0,
      cjiage: this.data.jiage[this.data.cjiageindex],
    })
    this.setData({
      
      titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing, 
      this.data.cmianji],
      showarray: [0, 0, 0, 0]
    })
    
  },
  /**户型确定 */
  huxingok:function(e){
    this.setData({
      mengban: 0,
      chuxing: this.data.huxing[this.data.chuxingindex],
    })
    this.setData({
      
      titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing, this.data.cmianji],
      showarray: [0, 0, 0, 0]
    })
    
  },

  /**更多确定 */
  gengduook:function(e){
    this.setData({
      mengban: 0,
      cmianji: this.data.mianji[this.data.cmianjiindex],
      cleixing: this.data.leixing[this.data.cleixingindex],
    })
    if(this.data.cmianji == null){
      this.setData({
        cmianji:''
      })
    }
    this.setData({
      titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing, this.data.cmianji],
      showarray: [0, 0, 0, 0]
    })
    
  },
  gotolistSellBuy:function(e){
    wx.navigateTo({
      url: '/pages/home/listSellBuy/listSellBuy'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   if(options.id == null){
     options.id = 0;
   }
    this.setData({
      currentInexs:options.id,
    })
  },
  mengbanok:function(){
    this.setData({
      showarray:[0,0,0,0],
      mengban:'0',
    })
  },
  buxian:function(){
    this.setData({
      chuxingindex:-1,
      showarray: [0, 0, 0, 0],
      mengban: '0',
      chuxing:''
    })
    this.setData({
      titlearray:[this.data.cdiqu,this.data.cjiage,this.data.chuxing,this.data.cmianji]
    })
  },
  chongzhi: function () {
    this.setData({
      cmianjiindex: -1,
      cleixingindex: -1,
      showarray: [0, 0, 0, 0],
      mengban: '0',
      cmianji: '',
      cleixing:''
    })
    this.setData({
      titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing, this.data.cmianji]
    })
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