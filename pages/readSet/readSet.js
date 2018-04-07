Page({
  data: {
    winWidth: 0,
    winHeight: 0
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
   var that = this;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
        });
      }
    });
  }
})
