// spread operator
let numbersV1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNumbersArr = [10, 11, 12, 13, ...numbersV1, 14, 15];
console.log(newNumbersArr);

let fruitsV1 = ['apple', 'orange', 'lemon', 'banana', 'kiwi', 'grape'];


let person = {
    name: 'John',
    age: 30,
    isMaried: true
};

let updatedPerson = {
    ...person,
    salary: 2000,
    company: 'Google'
};

console.log(updatedPerson);


// forEach()
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element, index) => {
  console.log(element, index);
});

const fruits = [
  {
    name: 'apple',
    color: 'red',
    price: 50,
    emoji: '🍎'
  },
  {
    name: 'orange',
    color: 'orange',
    price: 70,
    emoji: '🍊'
  },
  {
    name: 'lemon',
    color: 'yellow',
    price: 20,
    emoji: '🍋'
  },
  {
    name: 'banana',
    color: 'yellow',
    price: 90,
    emoji: '🍌'
  },
  {
    name: 'kiwi',
    color: 'green',
    price: 120,
    emoji: '🥝'
  },
  {
    name: 'grape',
    color: 'green',
    price: 150,
    emoji: '🍇'
  }
];

let newFruitsForEach = fruits.forEach((fruit) => {
  return fruit.price = fruit.price + 10;
});
console.log(newFruitsForEach);


// map()
let newFruitsMap = fruits.map((fruit) => {
  return fruit.price = fruit.price + 10;
});

console.log(newFruitsMap);


let fruitTax = fruits.map((fruit) => {
  return {
    name: fruit.name,
    tax: fruit.price / 2
  }
});
console.log(fruitTax);



// {
//   name: 'grape',
//     color: 'green',
//       price: 150,
//         emoji: '🍇'
// }


// console.log(updatedFruits);
// let price = 20;
// price = 30;
// price = price + 10;
// console.log(price);


let priceChangedFruits = fruits.map((fruit) => {
  return fruit.price = fruit.price + 10;
});

console.log(priceChangedFruits);

let newFruits = fruits.map((fruit) => {
  return fruit.name + " " + fruit.emoji;
});

console.log(newFruits);

let updatedFruits = fruits.map((item) => {
  return {
    ...item,
    category: 'fruits' + item.emoji
  }
});

  console.log(updatedFruits);


// find()
let myFruit = fruits.find((item) => {
  return item.name === 'banana';
});
console.log(myFruit);


let orangeFruit = fruits.find((item) => {
  return item.color === 'orange';
});
console.log(orangeFruit);


// filter()
let yellowFruits = fruits.filter((item) => {
  return item.color === 'yellow';
});
 console.log(yellowFruits);

 let greenFruits = fruits.filter((item) => {
  return item.color === 'green';
});
console.log(greenFruits);







