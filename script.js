$(function(){

  var subreddit;
  var subredditJson;

  $("form").on("submit", function(event) {
       event.preventDefault();
       subreddit = $("#rName").val();
       subredditJson = "https://www.reddit.com/r/"+subreddit+"/.json"
       $("#list").html("<h1>Reddit Minus Reddit</h1>");
  $.get(subredditJson, function(redditData){
    for(var i = 0; i < redditData.data.children.length; i++) {
      //for sanity's sake
      var thumbnail = redditData.data.children[i].data.thumbnail;
      var title = redditData.data.children[i].data.title;
      var permalink = redditData.data.children[i].data.permalink;
      var author = redditData.data.children[i].data.author;
      var comments = redditData.data.children[i].data.num_comments;
      //this is hard to read
      $("#list").append("<div><img src='" + thumbnail + "'/><a href='http://reddit.com"+permalink+ "'>"+title+"</a><p>"+author+"</p><p>"+comments+" comments</p></div>"
        );
    }
  });

  });
});
