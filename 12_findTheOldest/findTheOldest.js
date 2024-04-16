const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    let ans = people.reduce((total,current)=>{
        
        let currentMax = total.yearOfDeath? total.yearOfDeath-total.yearOfBirth: currentYear-total.yearOfBirth;
        let currentElement = current.yearOfDeath? current.yearOfDeath-current.yearOfBirth:currentYear-current.yearOfBirth;
        return currentMax>currentElement?total:current;
    })
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
