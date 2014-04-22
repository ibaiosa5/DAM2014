/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery', //cargar jquery para poder hacer los tests
        },
        shim : {
           // 'ydn-db': {
           //     exports : 'ydn'
           // }
        }
    });

    describe('Service module', function () {
        var srv;
        var $;

        beforeEach(function(done){
            require(['Service','jquery'], function(service,jquery){ //obtener los modulos jquery y Service
                srv = service;
                $ = jquery;
                sinon.spy($,'ajax');//para espiar el metodo ajax de jquery
                done();
            });
        });

        afterEach(function(done){
            $.ajax.restore();
            done();
        });
        describe('#getTweets', function () {
            it('$.ajax has been called', function (done) {
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
                done();
            });
            it('Get all tweets from Twitter', function (done) {
                srv.getTweets({
                    apiKey : ''
                },function(tweets){
                    if(tweets && tweets.statuses && tweets.statuses.length===100){
                        done();
                    }
                    else{
                        throw 'No se han obetindo los tweets';
                    }
                },function(err){
                    throw err;
                });
            });
        });
    });
})();
