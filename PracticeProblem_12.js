// ! Question : Table of threes {3 * }

for (let i = 1; i <= 10; i++) {
    let n = 3;
    // console.log(i*n);
    
    // console.log('The table of' + ' ' + n + ' * ' + i +' is === '+  i + ' ' + ' * ' + n + ' ' + ' = ' + i*n);

    // * by using the es6 template string syntax
    console.log(`The table of ${n} * ${i} is = ${i * n} `);   
}
