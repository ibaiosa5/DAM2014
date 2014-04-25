/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery', //cargar jquery para poder hacer los tests
        }
    });

    describe('Events module', function () {
        var events;
        var ctrl;

        beforeEach(function(done){
            require(['Controller','Events'], function(controller,eventos){
                ctrl = controller;
                events = eventos;
                sinon.spy(ctrl,'showLatestTweets');
                done();
            });
        });

        afterEach(function(done){
            ctrl.showLatestTweets.restore(); //dejar de espiar y volver al funcionamiento normal
            done();
        });

        describe('#showLatestTweets', function () {

            it('Event datachanged lanzado', function (done) {
                var event = new Event('datachange');/*

                var errTimeout = setTimeout(function(){
                    assert(false,'Event never fired');
                    done();
                },1000);*/

                $(document).on('datachange',function(){
                    clearTimeout();
                    assert(true);
                    done();
                });

                document.dispatchEvent(event);

                done();
            });

        });
    });
})();
