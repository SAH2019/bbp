const app = getApp();
Page({
  data:{
    book: '请选择学习任务',
    bookname: app.data.bookname,
    day:'',
    dayNum: app.data.dayNum,
    x:50,
  },

  /*修改学习任务 */
    bindchange:function(re1){
      
      this.setData({
        book: app.data.bookname[re1.detail.value]
      })
      app.data.book = this.data.book;
  },

  daychange: function (re2) {
    this.setData({
      day: app.data.dayNum[re2.detail.value]
    })
      app.data.day = this.data.day;
  },
  
  study: function () {
    wx.navigateTo({
      url: '/pages/study/study'
    });
  },
  Paihangbang: function () {
    wx.navigateTo({
      url: '/pages/Paihangbang/Paihangbang'
    });
  },
  Xiaoyouxi: function () {
    wx.navigateTo({
      url: '/pages/game/game'
    });
  },


  })