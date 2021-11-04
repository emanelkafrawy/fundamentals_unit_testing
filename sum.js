/*
    JSDoc
    the sum function
    [1] return 0 if no number passed
    [2] return the number if its only number passed
    [3] if there are 2 numbers it add number 1 + 2
    [4] and so on will add all number and return it
*/

// const thesum = (num, num2, num3) =>{
//     return (num || 0) + (num2 || null) + (num3 || null); 
// }

const thesum = (...num) =>{
    return num.reduce((pv, cr) => pv + cr, 0);//prev , current , 0 means inital value
}//reduce method


//truesy falsy pattern

//refactor for fail testing

module.exports = thesum;
