var util = require('../../utils/util.js');

Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数  movie/subject/26354336
    var processMovieDetail = util.processMovieDetail;
    util.ajax('movie/subject/'+options.movieId, (response)=>{processMovieDetail.call(this, response.data)})
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