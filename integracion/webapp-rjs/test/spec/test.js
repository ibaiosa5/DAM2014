/* global describe, it */
(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire:require
    });

    describe('test', function () {
        var mod;
        beforeEach(function(done){
            require(['FizzBuzz'],function(fizzbuzz){
                mod = fizzbuzz;
                done();
            });
        });

        describe('Test methods', function(){
            it('Should return 1', function(){
                assert.equal(1,mod.testNumber(1));
            });
            it('Should return nothing', function(){
                assert.equal('',mod.testNumber());
                assert.equal('',mod.testNumber(undefined));
                assert.equal('',mod.testNumber(null));
            });
            it('Should return the list fizz buzz', function(){
                assert.equal('1,2,fizz',mod.testNumber(3));
                assert.equal('1,2,fizz,4,buzz',mod.testNumber(5));
                assert.equal('1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz',mod.testNumber(15));
            });

        });
    });
})();
