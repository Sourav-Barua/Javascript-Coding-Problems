/* 
! You are given  a triangle with the sides 9,8,9 write a program to check whether a triangle is isosceles or not using if else.*/

// * isosceles => two sides are equal 

var side1 = 9 ;
var side2 = 8 ;
var side3 = 10 ;

if (side1== side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
}else{
    console.log('isosceles not');
}