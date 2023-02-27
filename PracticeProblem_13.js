// !Questions: make a function to count the the array and return bigger than 5 by counting


let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 16, 10];

function greaterThanFive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 5) {
            count++;
        }
    }
    return count;
}

console.log(greaterThanFive(numbers));