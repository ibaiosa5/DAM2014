define('Controller',['Data','Service'],function(DB,srv){
    'use strict';

    var getTweetsFromTwitter = function(){
        srv.getTweets({},processTweets,error);
    };

    var processTweets = function(data){
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
                DB.addTweets(tweet,success,error);
            }
        }

    };

    var success =function(){
        console.log('se ha añadido'+tweet);
    };

    var error = function(){
        console.log('error');
    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});