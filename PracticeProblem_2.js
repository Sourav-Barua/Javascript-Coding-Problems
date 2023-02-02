/*Question : write a program to calculate average marks of mathematics, biology, chemistry, physics and bangla of a student*/ 

let mathematicsMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let banglaMarks = 99.50;


let totalMarks = mathematicsMarks + biologyMarks  + chemistryMarks + physicsMarks + banglaMarks ;

let averageMarks = totalMarks / 5 ;

console.log(averageMarks.toFixed(2));