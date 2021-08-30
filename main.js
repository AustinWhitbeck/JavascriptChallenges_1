//**  Standard  **//

const numArray = [1, 3, 4, 6];
const stringArray = ['yes', 'no', 'maybeso'];
const stringArray2 = ['yes', 'maybeso'];
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
const duplicateArray = ['yes', 'no', 'yes', 'six']


// 1 function that adds all values of an array //

function addAllValues(array){
    let currentTotal = 0;
    console.log(array);
    console.log(array[1]);
    for ( let i = 0; i < array.length; i++){
        currentTotal = currentTotal + array[i];
    }
    return currentTotal;
}

console.log(addAllValues(numArray));


// 2 write a function that returns the average of the elements in an array of numbers //

const averageOfArray = (array) => {
    let currentTotal = 0;
    let average = 0;
    for (let i = 0; i < array.length; i++){
        currentTotal += array[i];
    }
    average = currentTotal / array.length;
    return average;
}

console.log(averageOfArray(numArray));


// 3 write a function that returns the longest strin in an array of strings

const longestString = (array) => {
    let longestString = '';
    array.forEach((string) => {
        if (longestString.length < string.length){
            longestString = string;
        };
    })
    return longestString;
}

console.log(longestString(stringArray));


// 4 write a function that counts the number of vowels in a string

const numOfVowels = (string) => {
    let numberOfVowels = 0;
    for ( let i= 0; i < string.length; i++){
        if (vowelsArray.includes(string)){
            numberOfVowels ++
        }
    }


    return numberOfVowels;
}

console.log(numOfVowels('ribs'));
console.log(numOfVowels('riIIbs'));


// 5 write a function that returns the matching values in an array

const matchingArrays = (array1, array2) => {
    let newArray = [];
    array1.forEach((item) => {
        if ( array2.includes(item)){
            newArray.push(item);
        }
    })
    return newArray
}

console.log(matchingArrays(stringArray, stringArray2));


// 6 write a function that returns all non matching values

const doesNotMatchArrays = (array1, array2) => {
    let newArray = [];
    array1.forEach((item) => {
        if ( !array2.includes(item)){
            newArray.push(item);
        }
    })
    return newArray
}

console.log(doesNotMatchArrays(stringArray, stringArray2));

// 7. remove duplicate from array

const removeDuplicates = (array) => {
    let newArray = [];
    array.forEach((item) => {
        if ( !newArray.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
}

console.log(removeDuplicates(duplicateArray));


// 8. remove all the vowels from a string

const removeVowels = (string) => {
    let newString = string.split('');
    let noVowelsString = '';
    newString.forEach((letter) => {
        if(!vowelsArray.includes(letter)){
            noVowelsString += letter;
        }
    })
    return noVowelsString;
}

console.log(removeVowels('Encumbered'));


// 9 given an array of objects, write function that returns the object with the fewest calories

const foodArray = [
    {
        name: 'carrots',
        calories: 10
    },
    {
        name: 'oranges',
        calories: 15
    },
    {
        name: 'apples',
        calories: 5
    }
]

const lowestCalories = (array) => {
    let currentLowestCalorie = {
        name: 'start',
        calories: 100000000000000000000000000
    };
    array.forEach((object) => {

        if(object.calories < currentLowestCalorie.calories){
            currentLowestCalorie = object;
        }
    })
    return currentLowestCalorie;
}

console.log(lowestCalories(foodArray));


/// *** ADVANCED **** ///



// 1 count up to a number as a parameter starting at 1 and return the following:
// multiples of 3 return fizz
// multiples of five return buzz
// multiples of three and five return fizzbuz
// everything else returns the current number

const fizbuzz = (number) => {
    let countTo = number;
    let countedNumbersArray = [0];
    let currentCount = 1;
    while(currentCount < countTo){
        if (currentCount % 15 == 0){
            console.log(currentCount);
            countedNumbersArray.push('fizzbuzz')
            currentCount ++;
        } else if ( currentCount % 5 == 0){
            console.log(currentCount);
            countedNumbersArray.push('buzz');
            currentCount ++;
        } else if ( currentCount % 3 == 0){
            console.log(currentCount);
            countedNumbersArray.push('fizz');
            currentCount ++
        } else {
            console.log(currentCount);
            countedNumbersArray.push(currentCount);
            currentCount ++;
        }
    }
    return countedNumbersArray;
}

console.log(fizbuzz(50));

