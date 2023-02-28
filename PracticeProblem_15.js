/* 
    * Problem:1   radianToDegree

    !ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

    Input               Output
    10                   572.96
    25                  1432.39
    199                 11401.86

*/

function radianToDegree(radian) {
    const pi = 3.141592653589793238462643383279502884197;
    return radian * 180 / pi;
}

const total = radianToDegree(10).toFixed(2);
console.log(total);