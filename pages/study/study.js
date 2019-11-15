
 let index = 0;
 const app = getApp();
Page({
 
    data: {
      book: '',
      bookname: app.data.bookname,
      words:['access','love','success','finally','only','displaly'
      ],
    },

   onShow:function(){
     this.setData({
       book:app.data.book,
       word:this.data.words[index]
     })
     console.log(this.data.words[index])
   },
   lastword:function(){
     let that = this;
     index--;
     this.setData({
       word:that.data.words[index]
     })
    
 
   },

   nextword: function () {
     let that = this;
     index++;
     this.setData({
       word: that.data.words[index]
     })

       

  }


    })


