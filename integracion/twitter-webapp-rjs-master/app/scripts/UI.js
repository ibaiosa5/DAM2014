define('UI',['jquery', 'handlebars'],function($,Handlebars){
    'use strict';

    console.log('UI module started');

    var showTweetsList = function(tweets,success,error){
        var $list =$('#twitter-list');
        var list = $('#list-tpl').html();
        var template = Handlebars.compile(list);
        var html = template({tweets:tweets});
        $list.html(html);
    };

    return{
        showTweetsList : showTweetsList
    };
});