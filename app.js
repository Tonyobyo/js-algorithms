//Check if boolean
isBoolean = (value) => {
  if(value === true || value === false){
    return true;
  }else{
    return false;
  }
}

isBoolean(null);

//Combine Arrays
combineArrays = (arr1, arr2, n) => {
  let newArr = arr2.slice();

  return newArr.splice(n, 0, ...arr1);
}

combineArrays([1, 2, 3], [4, 5, 6], 1);

//Confirm the ending of a string
confirmEnding = (aString, ending) => {
  return aString.endsWith(ending);
}

confirmEnding('Hello World, my name is Michael', 'Michael');

//Convert Celsius to Fahrenheit
convertTemperature = (celsius) => {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

convertTemperature(Math.floor(Math.random * 50));

//Factorialize a number
factorial = (aNumber) => {
  if(aNumber < 0){
    return -1;
  }else if(aNumber == 0){
    return 1;
  }else{
    return (aNumber * factorial (aNumber - 1));
  }
}

factorial(Math.floor(Math.random * 10));

//Find array elements
findElements = (arr, func) => {
  let num = 0;
  return arr.filter(func)[num];
}

findElements([1, 2, 3, 4], num => num % 2 === 0);

//Find the largest number in an array
largestNumber = (arr) => {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Find the longest word in a string
findTheLongestWord = (aSentence) => {
  let wordSplit = aSentence.split(' ');
  let wordCounter = 0;

  for(let i = 0; i < wordSplit.length; i++){
    if(wordSplit[i].length > wordCounter){
      wordCounter = wordSplit[i].length;
    }
  }

  return wordCounter;
}

findLongestWord('Hello World, my name is Michael!');

//Insert into specific index of array
indexToInsert = (arr, num) => {
  arr.sort(function(a,b){
    a - b;
  });

  for(i = 0; i < arr.length; i++){
    if(num <= arr[i]){
      return i;
    }
  }

  return arr.length;
}

indexToInsert([40, 60], 50);

//Mutation (Compare characters of 2 strings)
mutation = (arr) => {
  let word1 = arr[0].toLowerCase().split('');
  let word2 = arr[1].toLowerCase().split('');

  for(let i = 0; i < word2.length; i++){
    if(word1.indexOf(word2[i]) === -1){
      return false;
    }
  }

  return true;
}

mutation(['hello', 'hey']);

//Remove falsy values
isFalsy = (arr) => {
  return arr.filter(Boolean);
}

isFalsy([17, "ate", "", false, 9]);

//Repeat a string
repeatString = (str, times) => {
  if(times > 0){
    return str.repeat(times);
  }else{
    return str;
  }
}

repeatString('Beetle Juice!', 3);

//Reverse a string
reverseString = (words) => {
  return words.split('').reverse().join('');
}

reverseString('Hello World, my name is Michael!');

//Split 1d array into 2d array
groupArrays = (arr, size) => {
  let newArray = [];
  let count = 0;

  for(let i = 0; i < arr.length/size; i++){
    newArray.push(arr.slice(count, count + size));
    count += size;
  }

  return newArray;
}

groupArrays(['a', 'b', 'c', 'd'], 2);

//Title Case a string
titleCase = (str) => {
  let lowerCase = str.toLowerCase();
  let strSplit = str.split(' ');
  let newStr = '';

  for(let i = 0; i < strSplit.length; i++){
    newStr += ' ' + strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
  }

  return newStr.trim();
}

titleCase('my name is Michael and I make websites.');

//Truncate a string
strTruncate = (str, num) => {
  let strSlice = str.slice(0, num) + '...';

  if(str.length <= num){
    return str;
  }else{
    return strSlice;
  }
}

strTruncate('Hello, my name is Michael', 10);