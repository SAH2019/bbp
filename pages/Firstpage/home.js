const app = getApp();
Page({
  data:{
    book: '请选择学习任务',
    bookname: app.data.bookname
  },
    bindchange:function(re){
      
      this.setData({
        book: app.data.bookname[re.detail.value]
      })
      app.data.book = this.data.book;
      
  
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



  CustomBar: app.globalData.CustomBar,

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for(let i = 0, lenI = items.length; i<lenI; ++i) {
  if (items[i].value == values) {
    items[i].checked = !items[i].checked;
    break
  }
}
this.setData({
  checkbox: items
})
  }
})