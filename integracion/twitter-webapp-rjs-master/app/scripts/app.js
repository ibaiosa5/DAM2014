define(['Controller'], function(Controller) {
    'use strict';

    console.log('App started');

    Controller.getTweetsFromTwitter();
    Controller.showLatestTweets();

});