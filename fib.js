
let cache = {};

function fib(n) {
    if (cache[n]) return cache[n];
    if (n <= 1) {
        cache[n] = n;
    } else {
        cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
}

function fibTab(n) {
    cache[0] = 0;
    cache[1] = 1;
    for (i = 2; i <= n; i++)
        cache[i] = cache[i - 1] + cache[i - 2];
    return cache[n];
}

let j;
for (j = 0; j < 50; j++) {
    console.log(`fibTab(${j}) is ${fibTab(j)}`);
}
