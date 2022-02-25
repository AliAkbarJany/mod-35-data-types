function stopWatch() {
    let counter = 0;
    return function () {
        // function clock1()
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());