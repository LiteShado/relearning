function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
// logical operators

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// testing new conditionals

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}

testSize(7);

//return array values with complex logical conditions

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//switch statements

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//default statement

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//blackjack code with conditionals

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  console.log(count);

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//introduction to objects and properties dot notation and bracket notation

// Setup
const testObject = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObject.hat; // Change this line
const shirtValue = testObject.shirt; // Change this line

// Setup
const testObjectTwo = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObjectTwo["an entree"]; // Change this line
const drinkValue = testObjectTwo["the drink"]; // Change this line
console.log(drinkValue);

//accessing object properties as values INSTEAD OF just accessing it's name

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line

const player = testObj[playerNumber]; // Change this line

console.log(player);

////////

//adding a bark property to the myDog object

const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";

//deleting a property from an object using bracket notation

const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog["tails"];

//using objects for lookups

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
// using hasOwnProperty to check objects for properties

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

//accessing nested objects using bracket and dot notation

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Updating records through objects and arrays

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

// accessing nested arrays

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

// While loops

// Setup
const myArray = [];

// Only change code below this line

let i = 5;

while (i >= 0) {
  //decreases i from 5 to 0 inclusive, and pushes to an array
  myArray.push(i);
  i--;
}

// For loops
// Setup

const myNewArray = [];

// Only change code below this line

for (let i = 1; i < 5; i++) {
  myNewArray.push(i);
}

// Setup
const myNewNewArray = [];

// Only change code below this line

for (let i = 1; i <= 9; i += 2) {
  myNewNewArray.push(i);
}

//iterate through an array and add to total

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

function main() {
  //take flight number and its status
  var flightNumber = readLine();
  var flightStatus = readLine();
  var flight1 = new Flight(flightNumber, flightStatus);
  //assign a flight object to flight1 variable
  //output
  console.log("The flight " + flight1.number + " is " + flight1.status);
}

function Flight(flightNumber, flightStatus) {
  //fix the constructor

  this.number = flightNumber;
  this.status = flightStatus;
}

// another exercise

function main() {
  var prodID = readLine();
  var price = parseInt(readLine(), 10);
  var discount = parseInt(readLine(), 10);
  var prod1 = new Product(prodID, price);
  console.log(prod1.prodID + " price: " + prod1.price);
  prod1.changePrice(discount);
  console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;

  this.changePrice = function (discount) {
    //your code goes here

    this.price = price - (price * discount) / 100;
  };
}

// calling a method inside of a function

function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

function print() {
  console.log(this.name + ": " + this.number);
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

// changing array

function main() {
  var breakfasts = [
    "Cinnamon Doughnuts",
    "Waffles",
    "Granola",
    "Chorizo Burrito",
    "French Toast",
  ];
  var index = parseInt(readLine(), 10);
  //replace the corresponding element by "Fluffy Pancakes"

  breakfasts[index] = "Fluffy Pancakes";
  console.log(breakfasts);
  //output the menu to the console
}

// Math Objects

function main() {
  var year = parseInt(readLine(), 10);
  //the output
  console.log(calcCent(year));
}

//complete the function
function calcCent(year) {
  return Math.ceil(year / 100);
}

// Math Objects

function main() {
  var year = parseInt(readLine(), 10);

  //the output
  console.log(calcCent(year));
}

//complete the function
function calcCent(year) {
  return Math.ceil(year / 100);
}

// get and print time function

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);

// converting date to day display

function main() {
  var year = parseInt(readLine(), 10);
  var month = parseInt(readLine(), 10);
  var day = parseInt(readLine(), 10);

  console.log(getWeekDay(year, month, day));
}

function getWeekDay(year, month, day) {
  var names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(year, month, day);
  //complete the function

  var day = d.getDay();

  return names[day];
}

// price change code

function main() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  //your code goes here

  let final = [];

  for (let i = 0; i < prices.length; i++) {
    prices[i] += increase;
    let sum = prices[i];
  }

  final.push(sum);
  console.log(final);
}
// recursive functions

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Only change code above this line
}

//profile lookup loop

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
// Only change code above this line

lookUpProfile("Akira", "likes");

//Math.floor + Math.random

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//use parseInt to convert str to integer and checks base

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//ternary operators

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//chained ternary operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

//using recursion to create countup loop

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const newArray = countdown(n - 1);
    newArray.unshift(n);
    return newArray;
  }
  return;
}
// Only change code above this line

//creating loop without using For

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const newArray = rangeOfNumbers(startNum, endNum - 1);
    newArray.push(endNum);
    return newArray;
  }
}

//rest parameter

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

//spread operator

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//destructuring assignments

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
