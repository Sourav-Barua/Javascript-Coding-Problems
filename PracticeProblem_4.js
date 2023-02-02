/* var fruits= ['apple', 'banana', 'oranges']
    1. find the index of banana and replace banana with mango\
    2.remove orange and add watermelon 
*/ 

var fruits = ['apple', 'banana', 'orange'];

// find index of banana
console.log(fruits.indexOf('banana'));

// replace 
fruits[1] = 'mango';
console.log(fruits);

//remove orange 
fruits.pop()
console.log(fruits);

//add watermalon
fruits.push('watermelon')
console.log(fruits);

/*-----------------------------*/ 
//shift unshift 
fruits.unshift('jambura')
fruits.unshift('peyara')
console.log(fruits);

fruits.shift()
console.log(fruits);