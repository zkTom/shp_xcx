import config from '../config/config.js';

let ShopApi = {
  getShopList: (options) => {
    let page_start = options.page_start || 1;
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${config.basePath}/j/search_subjects`,
        data: {
          type: 'movie',
          tag: '热门',
          sort: 'recommend',
          page_limit:10,
          page_start: page_start
        },
        header: { 'Content-Type': 'json' },
        method: 'GET',
        success: res => resolve(res),
        fail: err => reject(err)
      })
    })
  }
}

export default ShopApi;