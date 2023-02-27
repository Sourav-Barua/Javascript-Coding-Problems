 /* 
    !!!! question: 1 + 2 + 3 + 4 + 5 + ..... + n {summation}

    n(n+1)
 */

    let n = 2;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log(sum);
    
// * another way to solve it:
    let sum2 = (n*(n+1)/2);
    console.log('The summation is :',sum2);