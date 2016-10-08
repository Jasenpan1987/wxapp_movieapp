var util = require('../../utils/util.js');

Page({
  data:{
    movies: [],
    hidden: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数https://api.douban.com/v2/movie/top250
    const processMovies = util.processMovies
    util.ajax('movie/top250', (response)=>{processMovies.call(this, response.data.subjects)});
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})