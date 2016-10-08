var util = require('../../utils/util.js');

Page({
  data:{
    // text:"这是一个页面"
    keywords: '',
    hidden: true,
    modalHidden: true,
    notFoundDisplay: 'none',
    movies: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成/v2/movie/search?q={text}
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  inputChangeHandler(e){
      this.setData({keywords: e.detail.value, notFoundDisplay: 'none'})
  },

  searchBtnClickHandler(){
      this.setData({movies: []})
      if(this.data.keywords == ''){
          this.setData({
              modalHidden: false
          })
          return ;
      }
      this.setData({
          hidden: false
      })
      const processMovies = util.processMovies;
      util.ajax('movie/search?q='+this.data.keywords, (response)=>{
            if(response.data.subjects.length === 0){
              return this.setData({notFoundDisplay: 'block', hidden: true });
            }
            processMovies.call(this, response.data.subjects)
            this.setData({
              hidden: true  
            })
          });
  },

  modalConfirm(){
       this.setData({
              modalHidden: true
        })
  }

})