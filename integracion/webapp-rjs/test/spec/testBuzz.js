/* global describe, it */
(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire:require
    });

    describe('testBuzz', function () {
        var mod;
        beforeEach(function(done){
            require(['Buzz'],function(buzz){
                mod = buzz;
                done();
            });
        });

        describe('Test methods', function(){
            it('Should return true', function(){
                assert.equal(true,mod.comprobar(5));
                assert.equal(true,mod.comprobar(15));
            });
            it('Should return false', function(){
                assert.equal(false,mod.comprobar(3));
                assert.equal(false,mod.comprobar());
                assert.equal(false,mod.comprobar(undefined));
                assert.equal(false,mod.comprobar(9));
            });
        });
    });
})();
