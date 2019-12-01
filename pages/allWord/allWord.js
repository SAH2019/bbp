// pages/allWors.js
Page({
      

        data: {
          allwordA: [
            { type: '1', word: 'amazing' },
            { type: '2', word: 'amazing' },
            { type: '3', word: 'amazing' },
            { type: '4', word: 'amazing' },
            { type: '5', word: 'amazing' },
            { type: '6', word: 'amazing' },
            { type: '7', word: 'amazing' },
            { type: '8', word: 'amazing' },
            { type: '9', word: 'amazing' },
            { type: '10', word: 'amazing' },
            { type: '11', word: 'amazing' },
            { type: '12', word: 'amazing' },
            { type: '13', word: 'amazing' },
            { type: '14', word: 'amazing' },
            { type: '15', word: 'amazing' },
            { type: '16', word: 'amazing' },
          ],
              allwordB: [
            { type: '1', word: 'Bmazing' },
            { type: '2', word: 'Bmazing' },
            { type: '3', word: 'aBmazing' },
            { type: '4', word: 'Bamazing' },
            { type: '5', word: 'Bamazing' },
            { type: '6', word: 'Bamazing' },
            { type: '7', word: 'Bamazing' },
            { type: '8', word: 'Bamazing' },
            { type: '9', word: 'Bamazing' },
            { type: '10', word: 'Bamazing' },
            { type: '11', word: 'Bamazing' },
            { type: '12', word: 'Bamazing' },
            { type: '13', word: 'Bamazing' },
            { type: '14', word: 'Bamazing' },
            { type: '15', word: 'Bamazing' },
            { type: '16', word: 'Bamazing' },
          ],
          allwordC: [
            { type: '1', word: 'Camazing' },
            { type: '2', word: 'Camazing' },
            { type: '3', word: 'Camazing' },
            { type: '4', word: 'Camazing' },
            { type: '5', word: 'Camazing' },
            { type: '6', word: 'Camazing' },
            { type: '7', word: 'Camazing' },
            { type: '8', word: 'Camazing' },
            { type: '9', word: 'Camazing' },
            { type: '10', word: 'Camazing' },
            { type: '11', word: 'Camazing' },
            { type: '12', word: 'Camazing' },
            { type: '13', word: 'CaCmazing' },
            { type: '14', word: 'Camazing' },
            { type: '15', word: 'Camazing' },
            { type: '16', word: 'Camazing' },
          ],


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