import CateApi from "../../api/CateApi.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: 'hide',
    categoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })

    CateApi.getCategoryList({}).then(res => {
      let tags = res.data.tags;
      this.setData({
        categoryList: tags
      })
      wx.hideLoading()
    }).catch(err =>{
      console.log(err)
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  moreTap() {
    this.setData({
      isShow: 'show'
    })
  }
})