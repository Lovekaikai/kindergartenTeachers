// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation: '',
    settimeobj: '',
    isplay: 0,
    playico: "/images/play.png",
    stopico: "/images/stop.png",
    ctrimg: "/images/play.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id || 3;
    this.setData({
      id: id
    })
    console.log(options)
    this.getDetail();
  },
  play() {
    if (this.data.isplay == 0) {
      this.playfun()
      this.setData({ isplay: 1 })
      this.getBackgroudAduio();
      this.setData({ ctrimg: this.data.stopico, isplay: 1 })
    } else {
      this.stopfun()
      this.setData({ isplay: 0 })
      this.setData({ ctrimg: this.data.playico, isplay: 0 })
    }
  },
  playfun() {
    var animationobj = wx.createAnimation({
      duration: 1000,
      transformOrigin: "50% 50% 0",
      timingFunction: "linear",
      delay: 0
    })
    var i = 0;
    this.data.settimeobj = setInterval(function () {
      animationobj.rotate(180 * (++i)).step();
      this.setData({
        animation: animationobj.export()
      })
    }.bind(this), 750)
  },
  stopfun() {
    var animationobj = wx.createAnimation({
      duration: 1000,
      transformOrigin: "50% 50% 0",
      timingFunction: "step-start",
      delay: 0
    })

    animationobj.rotate(0).step();

    this.setData({
      animation: animationobj.export()
    })
    clearInterval(this.data.settimeobj)

  },
  getBackgroudAduio() {
    var that=this;
    // console.log(this)
    wx.playBackgroundAudio({
      dataUrl: that.data.info.audiosrc,
      title: '',
      coverImgUrl: ''
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  getDetail() {
    var that = this;
    wx.request({
      url: 'https://msyj.yftechnet.com/index.php?m=weimagetext&a=storyshow&id=' + that.data.id,
      success: function (res) {
        that.setData({
          info: res.data
        })
        console.log(res)
      }
    })
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