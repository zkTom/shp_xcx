Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '加载中...'
    },
    loadedText: {
      type: String,
      value: '到底了'
    },
    isBottom: {
      type: Boolean,
      value: false
    },
    isShow: {
      type: Boolean,
      value: false
    }
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
    bottomMethod() {
      
    },
  }
})
