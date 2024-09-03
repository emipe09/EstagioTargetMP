
function Fibonacci(x, n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return x[n - 1] + x[n - 2];
}

function numberIsThere(x, num, n){
    if(x[n]==num){
        console.log(num + " Pertence a sequência");
        return;
    }
    if(n==0){
        console.log(num + " Não pertence a sequência");
        return;
    }
    return numberIsThere(x, num, n-1);
}

var x = [];
var n = 10;
for (var i = 0; i < n; i++) {
    x.push(Fibonacci(x, i));
}
console.log(x);
numberIsThere(x, 3, n);







