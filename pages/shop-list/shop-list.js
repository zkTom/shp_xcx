import ShopApi from "../../api/ShopApi.js";
import MyPage from "../..//model/Page.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPage: new MyPage(),
    isShow: false,
    isBottom: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    let shopPage = this.data.shopPage;
    shopPage.list = [];
    let page_start = shopPage.pageNum;
    ShopApi.getShopList({page_start:page_start}).then(res => {
      let subjects = res.data.subjects;
      shopPage.pageNum = shopPage.pageNum + 10;
      shopPage.list = subjects;
      this.setData({
        shopPage: shopPage
      })
      wx.hideLoading();
    }).catch(err => {
      console.log(err);
      wx.hideLoading();
    })
  },

  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function (e) {
    console.log('pulldown', e);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 加载数据
    this.setData({
      isShow: true
    })
    let shopPage = this.data.shopPage;
    let page_start = shopPage.pageNum;

    ShopApi.getShopList({ page_start: page_start }).then(res => {

      let subjects = res.data.subjects;
      shopPage.pageNum = shopPage.pageNum + 10;
      shopPage.list = MyPage.prototype.merge(shopPage.list, subjects);
      this.setData({
        shopPage: shopPage,
        isShow: false
      })
    }).catch(err => {
      console.log(err);
      this.setData({
        isShow: false
      })
    })
  },

})