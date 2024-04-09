const sumAll = function(start,end) {
    if(typeof(start)!== 'number' || typeof(end) !== 'number') return 'ERROR';
    if(start<0 || end<0) return 'ERROR';
    if(start>end)
    {
        let temp = start;
        start = end;
        end = temp;
    }
    
    
    let result = 0;
    for(start;start<=end;start++)
    {
        result+= start;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
