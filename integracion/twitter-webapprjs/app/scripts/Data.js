define('Data',['ydn-db'], function(ydn) {
    'use strict';

    var db = new ydn.db.Storage('tweeterdb');
    var tweetStore = 'tweetStore';

    var addTweet = function(tweet,success,error){
        var req = db.put({name:tweetStore,keyPath:'id'}, tweet);
        req.done(success);
        req.fail(error);
    };

    var getTweet = function(idtweet,success,error){
        var req = db.get(tweetStore,idtweet);
        req.done(success);
        req.fail(error);
    };

    var getAllTweets = function(success,error){
        var req = db.values(tweetStore);
        req.done(success);
        req.fail(error);
    };

    var removeTweet = function(idtweet,success,error){
        var req = db.remove(tweetStore,idtweet);
        req.done(success);
        req.fail(error);
    };

    var updateTweet = function(tweet,success,error){
        var req = db.put({name:tweetStore,keyPath:'id'}, tweet);
        req.done(success);
        req.fail(error);
    };

    return{
        addTweet : addTweet,
        updateTweet : updateTweet,
        removeTweet : removeTweet,
        getTweet : getTweet,
        getAllTweets : getAllTweets
    };

});