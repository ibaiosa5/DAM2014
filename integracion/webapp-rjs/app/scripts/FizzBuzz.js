// APP.FizzBuzz = (function(){})() igual a
define('FizzBuzz',['Fizz','Buzz'],function(Fizz, Buzz){
    'use strict';

    var testNumber = function(number){
        var list=[];
        for(var i=1;i<=number;i++){

            if(Fizz.comprobar(i)&&Buzz.comprobar(i)){
                list.push(Fizz.valor+Buzz.valor);
            }
            else if(Buzz.comprobar(i)){
                list.push(Buzz.valor);
            }
            else if(Fizz.comprobar(i)){
                list.push(Fizz.valor);
            }
            else {
                list.push(i);
            }
        }
        console.log(list);
        return list;
    };

    return {
        testNumber:testNumber
    };
});