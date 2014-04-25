define('Events.js',['jquery','Controller'],function($,ctrl){
    'use strict';

    console.log('Events module started');

    $(document).on('datachange', ctrl.showLatestTweets);

});