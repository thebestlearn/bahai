//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: ['../../assets/images/banner.png', '../../assets/images/banner.png', '../../assets/images/banner.png'
    ]
  },
  //事件处理函数
  onLoad: function (option) {
    var self = this
    wx.request({
      url: 'https://api.baha.site/books',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // success
        self.setData({
          contents: res.data
        })
      }
    })
  }
})
