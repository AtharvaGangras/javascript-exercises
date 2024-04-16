const fibonacci = function(a) {
    a = Number(a);
    if(a === 0) return 0;
    else if( a < 0) return 'OOPS';
    let prev = 1;
    let current = 1;
    let temp;
    for(let i = 3;i<=a;i++)
    {
        temp = prev;
        prev = current;
        current += temp;   
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
