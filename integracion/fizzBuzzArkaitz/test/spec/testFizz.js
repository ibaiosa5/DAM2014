(function () {
    'use strict';

    require.config({
        baseUrl: '../../app/scripts',
        nodeRequire: require
    });

    describe('Fizz', function () {
        var Fizz;

        beforeEach(function(done){
            require(['Fizz'], function(f){
                Fizz = f;
                done();
            });
        });

        describe('Fizz test number', function () {
            it('Should return true when the number is multiple of 3', function () {
                assert.isBoolean(Fizz.validate(3));
                assert.isTrue(Fizz.validate(3));
                assert.isBoolean(Fizz.validate(6));
                assert.isTrue(Fizz.validate(6));
                assert.isBoolean(Fizz.validate(9));
                assert.isTrue(Fizz.validate(9));
                assert.isBoolean(Fizz.validate(12));
                assert.isTrue(Fizz.validate(12));
                assert.isBoolean(Fizz.validate(15));
                assert.isTrue(Fizz.validate(15));
            });
            it('Should return false when the number is NOT multiple of 3', function () {
                assert.isBoolean(Fizz.validate());
                assert.isFalse(Fizz.validate());
                assert.isBoolean(Fizz.validate(1));
                assert.isFalse(Fizz.validate(1));
                assert.isBoolean(Fizz.validate(2));
                assert.isFalse(Fizz.validate(2));
                assert.isBoolean(Fizz.validate(4));
                assert.isFalse(Fizz.validate(4));
                assert.isBoolean(Fizz.validate(5));
                assert.isFalse(Fizz.validate(5));
                assert.isBoolean(Fizz.validate(7));
                assert.isFalse(Fizz.validate(7));
            });
            it('Should return Fizz as value', function () {
                assert.isString(Fizz.getValue());
                assert.equal('Fizz', Fizz.getValue());
            });
        });
    });
})();