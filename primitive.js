/* 
Data Types::
    1.number
    2.string
    3.boolean
    4.undefined
    5.null
    6.object
    7.symbol
*/

const x = { job: 'web develop' }
const y = x;
console.log(x, y);

x.job = 'software'
console.log(x, y)

y.job = 'android'
console.log(x, y)