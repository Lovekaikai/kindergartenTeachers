// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  getIndexList() {
    console.log(this.data.page)
    var that = this;
    new Promise(function (resolve, reject) {
      wx.request({
        url: getApp().globalData.api + "?m=weimagetext&a=storylist&pagesize=" + that.data.page,
        success: function (res) {
          resolve(res)
        }
      })
    }).then(function (res) {
      console.log(res.data)
      that.setData({
        infoList: res.data
      })
      wx.hideNavigationBarLoading()
    })


  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})