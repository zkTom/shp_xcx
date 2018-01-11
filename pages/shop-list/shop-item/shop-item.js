// pages/shop-list/shop-item/shop-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shop: {
      type: Object,
      value: {
        name: "",
        service: "",
        address: "",
        distance: ""
      },
      // observer: function (newVal, oldVal) { console.log(newVal) }
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

  }
})
