$(function(){
  //print: title of post, author, number of comments, thumbnail
  $.get('https://www.reddit.com/r/aww/.json', function(redditData){
    for(var i = 0; i < redditData.data.children.length; i++) {
      $("#list").append("<img src='" + redditData.data.children[i].data.thumbnail + "'/>"); //thumbnail img
      $("#list").append("<a href='http://reddit.com"+redditData.data.children[i].data.permalink+ "'>"+redditData.data.children[i].data.title+"</a>");
      //^this sucks
      $("#list").append("<p>"+redditData.data.children[i].data.author+"</p>");
      $("#list").append("<p>"+redditData.data.children[i].data.num_comments+" comments</p>");
    }
  });

});
