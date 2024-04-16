const getTheTitles = function(array) {
 return array.reduce((total,element)=>{
    total.push(element.title)
return total},[])
};

// Do not edit below this line
module.exports = getTheTitles;
