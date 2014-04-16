/* global describe, it */

(function () {
    'use strict';

    var error = function(err){
        throw err;
    };

    require.config({
        baseUrl : '../app/scripts/',
        paths :{
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports : 'ydn'
            }
        }

    });

    describe('Database module',function(){
        var DB;

        beforeEach(function(done){
            require(['Data'], function(data){
                DB = data;
                done();
            });
        });

        describe('Test methods', function(){
            it('Add one tweet', function(done){
                var tweet ={'id':'bartolo','text':'Iepe'};
                DB.addTweet(tweet,function(){done();},error);
            });
            it('Add some tweets', function(done){
                var tweets=[];
                tweets[0] ={'id':'bartolo1','text':'Iepe'};
                tweets[1] ={'id':'bartolo2','text':'Iepa'};
                DB.addTweet(tweets[0],function(){done();},error);
                DB.addTweet(tweets[1],function(){done();},error);
            });
            it('Get a tweet', function(done){
                var idtweet ='bartolo';
                DB.getTweet(idtweet,function(e){
                    if(e.id===idtweet){
                        done();
                    }
                },error);
            });
            it('Remove a tweet', function(done){
                var idtweet ='bartolo1';
                DB.removeTweet(idtweet,function(e){
                    if(e!==undefined){
                        done();
                    }
                },error);
            });
            it('Update a tweet', function(done){
                var tweet ={'id':'bartolo','text':'texto modificado'};
                DB.updateTweet(tweet,function(e){
                    if(e!==undefined){
                        done();
                    }
                },error);
            });
            it('get tweets', function(done){
                DB.getAllTweets(function(e){
                    console.log(e);
                    if(e!==undefined){
                        done();
                    }
                },error);
            });
        });

        /*after(function(done){

        });

        describe('#put method',function(){

        })*/

    });
})();
