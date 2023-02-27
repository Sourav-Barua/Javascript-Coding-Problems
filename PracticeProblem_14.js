// !Question : take two friend name and take a function and return that function in the reverse order of the function arguments and which friend name is bigger than others friend.

const friendName1 = 'rajib';
const friendName2 = 'sourav';

let friendNameLength1 = friendName1.length ; 
let friendNameLength2 = friendName2.length ;


function largestNameReverse(friendName1, friendName2) {
    if(friendNameLength1 > friendNameLength2){
        return friendName1.split('').reverse().join('');
    }
    else{
        return friendName2.split('').reverse().join('');
    }
}
console.log(largestNameReverse(friendName1, friendName2));