/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
            jquery: '../bower_components/jquery/dist/jquery', //cargar jquery para poder hacer los tests
        },
        shim : {
            handlebars: {
                exports : 'Handlebars'
            }
        }
    });

    describe('UI module', function () {
        var vista;
        var $;
        var ctrl;
        var DB;

        beforeEach(function(done){
            require(['Controller','UI','jquery','Data'], function(controller,ui,jquery,data){
                ctrl = controller;
                DB = data;
                vista = ui;
                $=jquery;
                done();
            });
        });

        describe('#showTweetsList', function () {
            var tweets;

            it('2 tweets printed', function (done) {
                vista.showTweetsList([{'id':'1234567890','text':'Mocha testing v2'},{'id':'1234567890', 'text':'Mocha testing v2'}]);
                assert.equal($('#twitter-list').children.length,2);
                done();
            });

            it('All tweets printed', function (done) {
                DB.getTweets(function(tweets){
                    vista.showTweetsList(tweets,function(){
                        assert.equal($('#twitter-list').children.length,100);
                    },function(err){
                        throw err;
                    });

                    done();
                },function(err){
                    throw err;
                });
            });

        });
    });
})();
