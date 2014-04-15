/* global describe, it */
require.config({
    baseUrl: '../app/scripts',
    nodeRequire:require
});

(function () {
    'use strict';

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
                assert.typeOf(mod.testNumber(1),'number');
                assert.typeOf(mod.testNumber(5),'string');

                assert.equal(1,mod.testNumber(1));
                assert.equal('fizz',mod.testNumber(3));
                assert.equal('buzz',mod.testNumber(5));
                assert.equal('fizzbuzz',mod.testNumber(15));
                assert.equal(22,mod.testNumber(22));
                assert.equal('fizzbuzz',mod.testNumber(30));
            });
        });
    });
})();
