/* Ques:
    ! write a function findOddSum() that will take the array[5,7,8,45,30] as the input parameter and will return the sum of the odd Number 
 */

    function getSumOfArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            const index = i;
            const element = numbers[index];
            sum += element;
            console.log(index,element, sum); 
        }
           return sum;
    }
    function getOddNumberOfAnArray(numbers) {
        const oddNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
            const index = i;
            const element = numbers[index];
            if (element % 2 === 1) {
                console.log(index,element); 
                oddNumbers.push(element);
            }
        }
        return oddNumbers;
    }
    const myNumbers = [12,65,45,78,32,45,91];

    const oddNumbers = getOddNumberOfAnArray(myNumbers);

    console.log(oddNumbers);

    const oddNumberSum = getOddNumberOfAnArray(oddNumbers);
   
    console.log('odd Number sum:', oddNumberSum);
    



