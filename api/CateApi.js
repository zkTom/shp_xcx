import config from '../config/config.js';

let CateApi = {
  getCategoryList: (options) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${config.basePath}/j/search_tags`,
        data: {
          type: 'tv'
        },
        header: { 'Content-Type': 'json' },
        method: 'GET',
        success: res => resolve(res),
        fail: err => reject(err)
      })
    })
  }
}

export default CateApi;