(function () {
    'use strict';

    require.config({
        baseUrl: '../../app/scripts',
        nodeRequire: require
    });

    describe('Buzz', function () {
        var Buzz;

        beforeEach(function(done){
            require(['Buzz'], function(f){
                Buzz = f;
                done();
            });
        });

        describe('Buzz test number', function () {
            it('Should return true when the number is multiple of 5', function () {
                assert.isBoolean(Buzz.validate(5));
                assert.isTrue(Buzz.validate(5));
                assert.isBoolean(Buzz.validate(10));
                assert.isTrue(Buzz.validate(10));
                assert.isBoolean(Buzz.validate(15));
                assert.isTrue(Buzz.validate(15));
            });
            it('Should return false when the number is NOT multiple of 5', function () {
                assert.isBoolean(Buzz.validate());
                assert.isFalse(Buzz.validate());
                assert.isBoolean(Buzz.validate(1));
                assert.isFalse(Buzz.validate(1));
                assert.isBoolean(Buzz.validate(2));
                assert.isFalse(Buzz.validate(2));
                assert.isBoolean(Buzz.validate(4));
                assert.isFalse(Buzz.validate(4));
                assert.isBoolean(Buzz.validate(7));
                assert.isFalse(Buzz.validate(7));
                assert.isBoolean(Buzz.validate(9));
                assert.isFalse(Buzz.validate(9));
            });
            it('Should return Buzz as value', function () {
                assert.isString(Buzz.getValue());
                assert.equal('Buzz', Buzz.getValue());
            });
        });
    });
})();