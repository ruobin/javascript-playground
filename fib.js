
let cache = {};

function fib(n) {
    if (cache[n]) return cache[n];
    if (n <= 1) {
        cache[n] = n;
        return n;
    }
    cache[n] = cache[n - 1] + cache[n - 2];
    return fib(n - 1) + fib(n - 2);
}
let i;
for (i = 2; i < 500; i++) {
    console.log(`fib(${i}) is ${fib(i)}`);
}
