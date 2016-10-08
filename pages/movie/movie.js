
var util = require('../../utils/util.js');

Page({
    data:{
        imgUrls: [
            '/assets/img/001.jpg',
            '/assets/img/002.jpg',
            '/assets/img/003.jpg'
        ],
        movies: [],
        hidden: false,
    },
    onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
        console.log(util)
        const processMovies = util.processMovies;
        util.ajax('movie/in_theaters', (response)=>{processMovies.call(this, response.data.subjects)});
    },

   movieTabHandler(e){
       //console.log(e.currentTarget.id)
       util.movieTabHandler(e.currentTarget.id)
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
