// pages/index/index.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.api);
    this.getIndexData();
    this.getIndexList();
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
  onReachBottom:function(){
    this.setData({
      page:this.data.page+3
    })
    this.getIndexList();
    console.log(this.data.page)
  },
  onPullDownRefresh:function(){
    this.setData({
      page:4
    })
    this.getIndexList();
  },
  getIndexData(){
    var that=this;
  new Promise(function(resolve,reject){
      wx.request({
        url: getApp().globalData.api + "?m=weimagetext&a=toptext",
        success:function(res){
          resolve(res)
        }
      })
    }).then(function(res){
        that.setData({
          info:res
        })
        // console.log(res)
    })
  
  },
  getIndexList(){
    console.log(this.data.page)
    var that =this;
    new Promise(function (resolve, reject) {
      wx.request({
        url: getApp().globalData.api + "?m=weimagetext&a=storylist&pagesize="+that.data.page,
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


  }
})