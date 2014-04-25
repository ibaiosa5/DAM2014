define('Controller',['Data','Service','UI'],function(DB,srv,UI){
    'use strict';

    console.log('Controller module started');

    var getTweetsFromTwitter = function(success,error){
        srv.getTweets({},function(tweets){
                processTweets(tweets,
                    function(tweets){
                        DB.addTweets(tweets,success,error);
                    },error);
            },error);
    };

    var processTweets = function(data,success,error){
        var tweets =[];
        if(data && data.statuses && data.statuses.length >0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                var tweet ={
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    time : new Date(data.statuses[i].created_at),
                    userid : data.statuses[i].user.id_str,
                    name : data.statuses[i].user.name,
                    photo : data.statuses[i].user.profile_image_url,
                };
                tweets.push(tweet);
            }
            success(tweets);
        }

    };

    var showLatestTweets = function(){
        DB.getTweets(function(tweets){
            UI.showTweetsList(tweets);
        });
    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter,
        showLatestTweets : showLatestTweets
    };
});