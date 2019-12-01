var app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personData1: [
      { image: 'http://m.qpic.cn/psb?/V11skLa80oPRLo/GAWawXHtg4dNs60yUUd5ILzACVjBc7u3scX.NFv1qRQ!/b/dDcBAAAAAAAA&bo=6APoAwAAAAARFyA!&rf=viewer_4', userName: '张三',wordNum:100 },
      { image: 'http://m.qpic.cn/psb?/V11skLa80oPRLo/GAWawXHtg4dNs60yUUd5ILzACVjBc7u3scX.NFv1qRQ!/b/dDcBAAAAAAAA&bo=6APoAwAAAAARFyA!&rf=viewer_4', userName: '李四', wordNum: 100 },
      { image: 'http://m.qpic.cn/psb?/V11skLa80oPRLo/GAWawXHtg4dNs60yUUd5ILzACVjBc7u3scX.NFv1qRQ!/b/dDcBAAAAAAAA&bo=6APoAwAAAAARFyA!&rf=viewer_4', userName: '王五', wordNum: 100  },
      { image: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLMtyJadIF0OiaaEiczyMfictRbfPASZ8NM7IlslTDJ3Ij8iaLLpcOnrOMwMtLa0RM6JIzYFSvflHYMnQ/132', userName: 'amazing', wordNum: 100  },
      { image: '5', userName: 'amazing', wordNum: 90 },
      { image: '6', userName: 'amazing', wordNum: 80 },
      { image: '7', userName: 'amazing', wordNum: 70 },
      { image: '8', userName: 'amazing', wordNum: 60 },
      { image: '9', userName: 'amazing', wordNum: 50 },
      { image: '10', userName: 'amazing', wordNum: 40 },
      { image: '11', userName: 'amazing', wordNum: 30 },
      { image: '12', userName: 'amazing', wordNum: 20 },
      { image: '13', userName: 'amazing', wordNum: 10 },
      { image: '14', userName: 'amazing', wordNum: 5 },
      { image: '15', userName: 'amazing', wordNum: 2 },
      { image: '16', userName: 'amazing', wordNum: 0 },


    ],
    personData2: [
      { image: '1', userName: 'sssss' },
      { image: '2', userName: 'aaaaa' },
      { image: '3', userName: 'bbbbb' },
      { image: '4', userName: 'ccccc' },
      { image: '5', userName: 'amazing' },
      { image: '6', userName: 'amazing' },
      { image: '7', userName: 'amazing' },
      { image: '8', userName: 'amazing' },
      { image: '9', userName: 'amazing' },
      { image: '10', userName: 'amazing' },
      { image: '11', userName: 'amazing' },
      { image: '12', userName: 'amazing' },
      { image: '13', userName: 'amazing' },
      { image: '14', userName: 'amazing' },
      { image: '15', userName: 'amazing' },
      { image: '16', userName: 'amazing' },


    ],


  navbar: ['背词排行榜', '小游戏排行榜'],
    currentTab: 0
  },




  navbarTap: function (e) {

    this.setData({

      currentTab: e.currentTarget.dataset.idx

    })

  } ,


  onLoad: function (options) {

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