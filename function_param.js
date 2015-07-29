function execute(someFunction, value) {
    someFunction(value);
}

execute(function say(word){
    console.log(word);
}, "Hello World");
/*
function fib(n) {
    if (n < 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2); 
}

console.log(fib(5));
 * */
