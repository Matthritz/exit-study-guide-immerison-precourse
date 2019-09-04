// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
   
    let result = [];
   let newArr = array.slice();
    for (let i = 0; i < newArr.length; i++){
        if (i % 2 === 0){
            result.push(newArr[i])
        } else {
            result.unshift(newArr[i]);
        }
    } return result;
};

var isPalindrome = (string) => {
   if (!string){
       return undefined;
   } else if (string.split('').reverse().join('').toLowerCase() === string.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

const mergeObjects = (...obj) => {
    return Object.assign(...obj, {});
};



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    for (var key in  obj){
        if (obj[key] === value){
            obj[key] = newValue;
        } if (typeof obj[key] === 'object') {
            obj[key] = replaceValuesInObj(obj[key], value, newValue);
        }
        // console.log(obj)
    } return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            addKeysToExistingObj(obj[key], newKey, newValue)
        }
    }    obj[newKey] = newValue
    return obj
};

var map = (arr, func) => {
//    let result = []
    if (arr.length === 0) {
        return [];
    } else {
        return [func(arr[0])].concat(map(arr.slice(1), func))
    }
};
    // result.push([func(arr[0])].concat(map(arr.slice(1), func)));
    // } return result;



/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    return comedians.filter(comedian => comedian.begin >= 2005)
        .map(comedian => {
            if (comedian.actor.length >= 10) {
                comedian = {
                    appearanceNumber: '#' + comedian.number,
                    name: comedian.actor,
                    seasonsActive: comedian.end - (comedian.begin - 1)
                }
            }
            return comedian;
        })
};


var comedianNamesFilteredAndMapped = (comedians) => {
    return comedians.filter(comedian => {
        return comedian.begin >= 2005 && comedian.actor.length > 10})
    .map(comedian =>  comedian.actor)
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // Your code here
    return comedians.reduce((seed, comedian) => {
if (comedian.actor.length >= 10 && comedian.begin >= 2005){
    let newActor = {
        appearanceNumber: '#' + comedian.number,
        name: comedian.actor,
        seasonsActive: comedian.end - (comedian.begin - 1)
    };
    seed.push(newActor)
} 
    console.log(seed);
    return seed;
}, [])
};

var comediansReduced2 = (comedians) => {
    // Your code here
    return comedians.reduce((acc, comedian)=> {
        if (comedian.begin >= 2005 && comedian.actor.length >= 10){
            acc.push(comedian.actor)
        } return acc;
    }, [])
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
