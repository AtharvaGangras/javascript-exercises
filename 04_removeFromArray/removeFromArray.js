const removeFromArray = function (arr, ...toBeRemoved) {
    // let indexOfRemoveElement = arr.indexOf(value);
    // arr.splice(indexOfRemoveElement,1);
    // return arr;

    //my implementation
    // for (let remove of toBeRemoved) {
    //     while (true) {
    //         let indexOfRemoveElement = arr.indexOf(remove);
    //         if(indexOfRemoveElement === -1) break; 
    //         arr.splice(indexOfRemoveElement, 1);
    //     }
    // }
    // return arr;

    return arr.filter(value=> !toBeRemoved.includes(value));

};

// Do not edit below this line
module.exports = removeFromArray;
