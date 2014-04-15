define('FizzBuzz',[],function(){
    'use strict';

    var testNumber = function(number){

        if(number%15===0){
            console.log('fizzbuzz');
            return 'fizzbuzz';
        }
        else if(number%5===0){
            return 'buzz';
        }
        else if(number%3===0){
            console.log('fizz');
            return 'fizz';
        }
        return number;
    };

    return {
        testNumber:testNumber
    };
});