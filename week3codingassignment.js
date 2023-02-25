//1. create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

    //1a.
    ages[ages.length - 1]; //locates the last element in the array
    ages[0]; //locates the first element in the array.
        console.log((+ ages[ages.length - 1]) - (ages[0])); //subtracing the value of the first element in the array from the value of the last element in the array, expected outcome is 90

    //1b.    
    ages.push(54); //adding a new age to my array
        console.log((ages[ages.length - 1]) - (ages[0])); //checking to make sure code is dynamic, expected outcome is 51

    //1c.    
    function findAverage (ages){ //write a function for the ages array
        let average = 0; //create a variable for the average
        for (var i = 0; i < ages.length; i++){ //created to loop through the array
            average += ages[i]; //used to calcuate the average
        }
        average = average / ages.length //used to divide by the length
        return average; //return the variable
    }
    console.log(findAverage(ages)); //call the function, expected outcome is 31.5(repeating)



//2. create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a.
let total = 0;
  for (let i = 0; i < names.length; i++) {
    total += names[i].length;
  }
  const average = total / names.length; //loop that iterates through the array calculating the average number of letters per name
console.log(average); //expected outcome is 3.83(repeating)

//2b.
console.log(names.join(' ')); //array method used to loop through array, concatenating all names together, separated by spaces



//3. How do you access the last element of an array?
console.log(ages[ages.length-1]); //expected outcome is 54



//4. How do you access the first element of an array?
console.log(names[0]); //expected outcome is Sam



//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = names.map(function(element){
    return element.length; //array method used to put the length of each name in the new nameLengths array
});
console.log(nameLengths); //expected outcome is 3, 5, 3, 5, 4, 3



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; //array method used to calcuate the sum of all the elements in nameLengths array
});
console.log(sum); //expected outcome is 23


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
const numberFunction = (word, n) => { //function with two parameters
    let result = '';
    for (let i = 0; i < n; i++){
        result += word;
    }
    return result; 
};
console.log(numberFunction('Hey', 4)); //call function, expected outcome is HeyHeyHeyHey



//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`; //arrow function used to take first and last names, making a full name
console.log(fullName('Sally', 'Baker')); //call the function, expected outcome Sally Baker



//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const numberArray = [43, 67, 89, 73, 90];

let numberArraySum = numberArray.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; //function that adds all elements in array to get the sum
});
console.log(numberArraySum); //expected outcome is 362

if (numberArraySum > 100){
    console.log(true);
}else{
    console.log(false);
} //Boolean returns true if sum is larger than 100, if not returns false, expected outcome is true



//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
const numArray = [7, 3, 4, 8, 9];
 
let numArraySum = numArray.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; //function that adds all elements in array to get the sum
});
console.log(numArraySum / numArray.length); //finding the average of all elements in array, expected outcome is 6.2



//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const num1 = [8, 6, 5, 9, 7];
const num2 = [2, 1, 4, 3, 5];

let num1Sum = num1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; //function that adds all elements in array to get the sum
});
console.log(num1Sum / num1.length); //finding the average of all elements in array, expected outcome is 7

let num2Sum = num2.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; //function that adds all elements in array to get the sum
});
console.log(num2Sum / num2.length); //finding the average of all elements in array, expected outcome is 3

if (num1Sum > num2Sum){
    console.log(true);
}else{
    console.log(false);
} //Boolean returns true if sum of num1 array is greater than the sum of num2 array, expected outcome is true



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink (isHotOutside, moneyInPocket){
    let getDrink = true;
    if (isHotOutside === true && moneyInPocket > 10.50){ //both have to be true in order to get a drink
        getDrink = true;
    }else{
        getDrink = false;
    }
    return getDrink;
}
console.log(willBuyDrink(true, 11)); //called function, expected Boolean outcome is true



//13. Create a function of your own that solves a problem.
const classList = ['Todd', 'Sam', 'Maci', 'Laurel', 'Jamie'];

let abcOrder = classList.forEach(function(element){
    return element; //function that puts a teacher's class list in alphabetical order, would be helpful with day to day tasks and activities.
});
console.log(classList.sort().join(', ')); //expected outcome Jamie, Laurel, Maci, Sam, Todd



