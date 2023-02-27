/* 
! Question: You are given three numbers 13,79 and  45. Write a program that will  print the largest number using if else.*/

var num1 = 93;
var num2 = 179;
var num3 = 145;


/* nested */
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else if(num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}