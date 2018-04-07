//获取应用实例
var WxParse = require('../wxParse/wxParse.js');

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    article: '<div style="text-align:center;">《静夜思》· 李白<br />床前明月光，<br />疑是地上霜。 <br />举头望明月， <br />低头思故乡。<br /><img src="http://www.xiexingcun.com/Poetry/6/images/53e.jpg" alt="" /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53.jpg" alt="" /><br /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53b.jpg" alt="" /><br /></div>',
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

   var temp = WxParse.wxParse('article', 'html', that.data.article, that, 5);
   that.setData({
     article: temp
   })
  }
})
