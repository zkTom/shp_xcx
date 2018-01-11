App({

  onLaunch: function () {
  
  },
  // 生命周期函数，小程序进入后台时触发触发
  onHide: function () {
    // console.log('app hide');
  },
  // 生命周期函数，小程序从进入前台时触发
  onShow: function () {
    // console.log('app show');
  },
  onError: function (e) {
    // console.log('app error', e)
  },
  globalData: {
    userInfo: null,
    url: 'https://miniapi.eiewz.cn/index.php/API/WxTestcart/'
  }
})