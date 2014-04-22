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

    describe('controller module', function () {
        var ctrl;
        var DB;
        var srv;

        beforeEach(function(done){
            require(['Controller','Data','Service'], function(controller,data,service){
                ctrl = controller;
                DB = data;
                srv = service;
                sinon.spy(srv,'getTweets');
                sinon.spy(DB,'addTweets');
                done();
            });
        });

        afterEach(function(done){
            srv.getTweets.restore();
            DB.addTweets.restore();
            done();
        });

        describe('#getTweetsFromTwitter', function () {
            it('Get all tweets from twitter and save to DB', function (done) {
                ctrl.getTweetsFromTwitter();
                assert.isTrue(srv.getTweets.calledOnce,'getTweets no llamado');
                assert.isTrue(DB.addTweets.calledOnce,'addTweets no llamado');
                done();
            });
        });
    });
})();
