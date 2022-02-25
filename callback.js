function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['tom hanks', 'tom cruise', 'tom hardy'];
// const myObject = { name: 'rafsan', age: 26 };
function greetMorning(name) {
    console.log('good morning', name);
}
function greetAfternoon(name) {
    console.log('good morning', name);
}
welcomeMessage('tom hanks', greetMorning);
welcomeMessage('rafsan jany', greetAfternoon);