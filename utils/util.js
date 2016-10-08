function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function ajax (subUrl, successCb, failCb){
  const baseUrl = 'https://api.douban.com/v2/';
  const url = baseUrl + subUrl;
  wx.request({
    url: url,
    header: {
      'Content-Type': 'application/json'
    },
    success: successCb,
    fail: failCb
  })
}

function joinNameOrDirector(personArr){
  var retStr = '';

  for(var i=0; i<personArr.length; i++){
    if(i==personArr.length-1){
      retStr += personArr[i].name;
    }else{
      retStr += personArr[i].name + ' / '
    }
  }
  console.log(retStr)
  return retStr
}

function processMovieDetail(movie){
  
  var newMovie = {
    title: movie.title,
    year: movie.year,
    image: movie.images.medium,
    genres: movie.genres.join('/'),
    casts: movie.casts,
    directors: joinNameOrDirector(movie.directors),
    summary: movie.summary,
    rating: movie.rating.average+ ' / 10'
  }
  this.setData({movie: newMovie})
  console.log(this.data.movie)
}

 function processMovies(movies){
    console.log(movies);
    var newMovies = movies.map((movie)=>{
        return {
            title: movie.title,
            movieId: movie.id,
            genres: movie.genres.join('/'),
            casts: joinNameOrDirector(movie.casts),
            directors: joinNameOrDirector(movie.directors),
            image: movie.images.large
        } 
    });

    this.setData({movies: newMovies, hidden: true})
    //console.log(newMovies)
}

function movieTabHandler(movieId){
  //console.log(movieId)
  wx.navigateTo({
    url: '../detail/detail?movieId='+movieId
  })
}

module.exports = {
  formatTime: formatTime,
  ajax: ajax,
  joinNameOrDirector: joinNameOrDirector,
  processMovies: processMovies,
  movieTabHandler: movieTabHandler,
  processMovieDetail: processMovieDetail
}
