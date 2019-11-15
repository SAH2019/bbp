// pages/allWors.js
Page({
      

        data: {
           allwords:[
             {type:'1',word:'amazing'},
             { type: '2',word: 'amazing'},
             { type: '3', word: 'amazing'},
             { type: '4', word: 'amazing'},
             { type: '5', word: 'amazing'},
             { type: '6', word: 'amazing'},
             { type: '7', word: 'amazing'},
             { type: '8', word: 'amazing'},
             { type: '9', word: 'amazing'},
             { type: '10', word: 'amazing'},
             { type: '11', word: 'amazing'},
             { type: '12', word: 'amazing'},
             { type: '13', word: 'amazing'},
             { type: '14', word: 'amazing'},
             { type: '15', word: 'amazing'},
             { type: '16', word: 'amazing'},


           ]

        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
          wx.request({
            url: 'http://106.53.39.176:5000/',
            
            method: "GET",
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'chartset': 'utf-8'
            },
            success(res){
              console.log('succ',res);
            },
            fail(res){
              console.log('fail',res);
            }
          })
        },








  
      })