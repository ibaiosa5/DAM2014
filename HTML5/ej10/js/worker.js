this.addEventListener('message', function(e) {
    var limit = e.data.limite;
    var array=[];
    var isPrime = function(number){
        for (var i = 2; i <number; i++) {
            if(number%i==0){
                return false;
            }
        }
        return true;
    };

    for(var number=2;number<=limit;number++){
        if(isPrime(number)){
            array.push(number);
        }
    }
    this.postMessage(array);

}, false);