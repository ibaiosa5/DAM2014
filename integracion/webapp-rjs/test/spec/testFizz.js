/* global describe, it */
(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire:require
    });

    describe('testFizz', function () {
        var mod;
        beforeEach(function(done){
            require(['Fizz'],function(fizz){
                mod = fizz;
                done();
            });
        });

        describe('Test methods', function(){
            it('Should return true/false', function(){
                assert.equal(true,mod.comprobar(15));
                assert.equal(true,mod.comprobar(3));
            });
            it('Should return false', function(){
                assert.equal(false,mod.comprobar(2));
                assert.equal(false,mod.comprobar(5));
                assert.equal(false,mod.comprobar(11));
            });
        });
    });
})();
