/* global describe, it */
(function () {
    'use strict';

    require.config({
        baseUrl: '../../app/scripts',
        nodeRequire: require
    });

    describe('FizzBuzz', function () {
        var FizzBuzz;

        beforeEach(function(done){
            require(['FizzBuzz'], function(fb){
                FizzBuzz = fb;
                done();
            });
        });

        describe('FizzBuzz test number', function () {
            it('Should return n when the number is not multiple of 3 or 5', function () {
                assert.equal(1, FizzBuzz.testNumber(1));
                assert.equal(2, FizzBuzz.testNumber(2));
                assert.equal(4, FizzBuzz.testNumber(4));
                assert.equal(7, FizzBuzz.testNumber(7));
                assert.equal(8, FizzBuzz.testNumber(8));
                assert.equal(11, FizzBuzz.testNumber(11));
                assert.equal(13, FizzBuzz.testNumber(13));
            });

            it('Should return Fizz when the number is multiple of 3', function () {
                assert.equal('Fizz', FizzBuzz.testNumber(3));
                assert.equal('Fizz', FizzBuzz.testNumber(6));
                assert.equal('Fizz', FizzBuzz.testNumber(9));
                assert.notEqual('Fizz', FizzBuzz.testNumber(15));
            });

            it('Should return Buzz when the number is multiple of 5', function () {
                assert.equal('Buzz', FizzBuzz.testNumber(5));
                assert.equal('Buzz', FizzBuzz.testNumber(10));
                assert.notEqual('Buzz', FizzBuzz.testNumber(15));
            });

            it('Should return FizzBuzz when the number is multiple of 15', function () {
                assert.equal('FizzBuzz', FizzBuzz.testNumber(15));
                assert.equal('FizzBuzz', FizzBuzz.testNumber(30));
                assert.equal('FizzBuzz', FizzBuzz.testNumber(45));
            });
        });

        describe('FizzBuzz test complete method', function () {
            it('Should print a complete FizzBuzz string', function () {
                assert.isString(FizzBuzz.print(1));
                assert.equal('1', FizzBuzz.print(1));
                assert.isString(FizzBuzz.print(3, ', '));
                assert.equal('1, 2, Fizz', FizzBuzz.print(3, ', '));
                assert.isString(FizzBuzz.print(5, ', '));
                assert.equal('1, 2, Fizz, 4, Buzz', FizzBuzz.print(5, ', '));
            });
        });
    });
})();
