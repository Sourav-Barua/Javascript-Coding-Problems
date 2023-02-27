/* 
! You and your friend tom, jane, peter and john got their final results. Your total score is 85, tom total score 66, janes total score 95 peter total score 56 and john total score 40.*/ 
/*
! 80 - A, 60->B, 50->C, 40->D  39 or less->F 
*/

let myScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore =56;

let totalMarks = [myScore, tomScore, janeScore, peterScore];

if (totalMarks>=80) 
{
    console.log('A Grade');
}
else if(totalMarks>=60)
{
    console.log('B Grade');
}
else if(totalMarks>=50)
{
    console.log('C Grade');
}
else if(totalMarks>=40)
{
    console.log('D Grade');
}
else if(totalMarks<=39)
{
    console.log('F Grade');
}

