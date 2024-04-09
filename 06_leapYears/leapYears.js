const leapYears = function(year) {
    // if(year%100 !==0 && year%4 === 0) return true;
    // if(year%100 === 0 && year%400 ===0) return true;
    // return false;

    //one liner
    // return year%4 === 0 && (year%100 !== 0 || year %400 === 0 )
    return Boolean(!(year%4) && ((year%100)  || !(year %400) ))
};

// Do not edit below this line
module.exports = leapYears;
