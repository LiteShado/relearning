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
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line
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
