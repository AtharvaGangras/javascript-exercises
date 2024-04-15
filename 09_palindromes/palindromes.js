const palindromes = function (string) {
    string = string.toLowerCase();
    splitString = string.split('');
    splitString = splitString.filter(element=>(element>='a' && element<='z')||(element>='0' &&element<='9'));

    let i = 0;
    let j = splitString.length-1
    while(i<j){
        if(splitString[i] !== splitString[j]) return false;
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
