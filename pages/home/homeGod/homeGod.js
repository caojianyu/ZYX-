// pages/home/homeGod/homeGod.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    homeListItem: {
      type: Array,
      value: []
    },
    homeFeuer: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
	
  /**
   * 组件的方法列表
   */
  methods: {
    gotoLeiBo: function (e) {
      wx.navigateTo({
        url: '/pages/home/homeLeiBo/homeLeiBo?id=1'
      })
    },
		detail(e){
			let id=e.currentTarget.dataset.index
			wx.navigateTo({
				url:"/pages/home/homeGod/homeGodDetail/homeGodDetail?id="+id
			})
		}
  }
})
