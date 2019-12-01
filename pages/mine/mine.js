const app = getApp();
Page({
  data: {
    userInfo:'',
    avatarUrl: '',
    // province: '省份',
    nickName: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hide: ''
  },
  onGotUserInfo: function (e) {
    if (e.detail.userInfo) {
      var user = e.detail.userInfo;
      app.globalData.userInfo = user;
      this.setData({
        userInfo:user,
        nickName:user.nickName,
        avatarUrl:user.avatarUrl,
        province:user.province,
        hide:'none'
      }); 
     

      
      console.log(user);
    } else {
      console.log("用户拒绝了登陆");
    }
  },


  showQrcode: function () {
    wx.navigateTo({
      url: '/pages/Paihangbang/Paihangbang'
    });
  },

   feedback: function () {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },
})