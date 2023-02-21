// check leap year 
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        //console.log ('your year is a leap year', year);// console.log
        return true;
    }
    else {
        // console.log ('your year is not a leap year', year);
        return false;
    }
}

isLeapYear(2001)