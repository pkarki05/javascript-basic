// console.log("Hello its me");
// alert("prakash");

// declearing variables
// var, let, const

// var myName = "Prakash Karki";
// console.log(myName);
// let address="Harrison";
// const age=30;

// operators

// const a = 7;
// const b = 6;
// const c = a - b;

// console.log(c);
// console.log(c);
// console.log(c);
//  comparison
// ==  === > >= < <=

// math object

// What is true?
// truthy:"s, 1, true {}, [], ()=>{}
// falsy:"", 0, false, undefined, null, NAN

// ternary statement
// statement?"true code exc": false code exe"
// const age = 0;
// !age ? console.log("welcome!") : console.log("go home!");

// const pet='cat'; //cow, dog
// if(pet==='cat'){
//     console.log('meow');
// }
// else if(pet='dog'){
//     console.log("fdfddf");
// }
// else{
//     console.log('woof');
// }

// // switch
// if(pet=='dog')

// error handling

// try {
//   // code block
// } catch (error) {
//   // catch error and handle
// } finally {
//   // run finally regardless
// }

// // scheduling
// // setTimeout
// console.log("before set timeout");
// const timeout = setTimeout(() => {
//   console.log("inside timeout");
// }, 1000);

// console.log("1.first");
// setTimeout(() => {
//   console.log("2.first");
// }, 1000);
// console.log("3.first");
// const hey = () => {
//   console.log("4.first");
// };
// console.log("5.first");

// setTimeout(() => {
//   console.log("6.first");
// }, 0);
// console.log("7.first");
// hey();
// console.log("8.first");

// ############## Function #############

// ############# Old way###########
// function add(a, b) {
//   console.log("inside the funtion");
//   return a + b;
// }
// console.log(add());
// const ans = add();
// console.log(add());

// ########## High order function ############
// const add = (a, b) => {
//   return a + b;
// };
// const multi = (a, b) => {
//   return a * b;
// };
// const cals = (a, b, func) => func(a, b);
// const data = cals(2, 3, multi);
// console.log(data);

// ############ ES6 new way(Arrow function) ###########
// const add = (a, b) => {
//   return a + b;
// };
// // console.log(add());
// const ans = add();
// console.log(add(5, 9));

// const bio = (name, add) => {
//    return
//    `

//    `

// const hi = bio("Prakash", "Harrison");
// console.log(hi);

// #############loop#############
// for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// ############While (Universal Loop)#########
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// ###### do while#######
// let i = 0;
// do {
//   console.log(i);
// } while (i <= 10);

// Data Manipulation

// const str = "hi there, My name is prakash, I live in harrison";
// const val = str.search("pk");

// console.log(val);

// ############Arrays###############
// const fruits = ["apple", "banana", "orange", "mango", "mandarins"];
// const data = fruits.length;
// fruits.push("pinapple", "rockmelon");
// fruits.unshift("pears");
// const data = fruits.shift();
// fruits.reverse();
// console.log(fruits);
// fruits.forEach();
// const newFruits = fruits.filter((items) => items.includes("p"));
// console.log(newFruits);

// const balances = [234, 3456, 223, 111, 33223, 443];
// const total = balances.reduce((acc, num) => acc + num, 0);
// console.log(total);
// const data = fruits.find((items) => items === "orange");
// console.log(data);
// const data = fruits.every((items) => items.includes("p"));
// console.log(data);

// Challange 1:
// 1.create an array of 50 random numbers range between 1 and 100
// 2.sort array in desecending order
// 3.get the total value of the array
// 4. divide original arrray into 2 odd and even arrray
// 5.remove the duplicate vlaue from the original array

// for (let i = 1; i <= 100; i++) {
//   let num = Math.floor(Math.random(i) * 100) + 1;

//   console.log(num);
// }

// 1.create an array of 50 random numbers range between 1 and 100

// let randomNumbers = [];

// for (let i = 0; i < 50; i++) {
// let randomNumber = Math.floor(Math.random() * 100) + 1;
//   randomNumbers.push(Math.floor(Math.random() * 100) + 1);
// }
// 2.sort array in desecending order

// console.log(randomNumbers);
// randomNumbers.sort((a, b) => b - a);
// 3.get the total value of the array

// const total = randomNumbers.reduce((acc, num) => acc + num, 0);
// console.log("Total is" + total);
// const evenNums = randomNumbers.filter((num) => num % 2 === 0);
// const oddNums = randomNumbers.filter((num) => num % 2 === 0);
// console.log(evenNums, oddNums);
// const noDuplicateArg = randomNumbers.filter(
//   (num, i) => randomNumbers.indexOf(num) === i
// );
// console.log(noDuplicateArg);

// 4. divide original arrray into 2 odd and even arrray

// let evenNumbers = [];
// let oddNumbers = [];
// for (i = 0; i <= 50; i++) {
//   let evenNumber = Math.floor(Math.random() * 100) + 1;

//   if (evenNumber % 2 === 0) {
//     evenNumbers.push(evenNumber);
//   } else oddNumbers % 2 !== 0;
//   {
//     let oddNumbers = Math.floor(Math.random() * 100) + 1;
//   }
// }
// console.log("even numbers are " + evenNumbers);

// const evenNumbers = findEvenNumbers(randomNumbers);

// Challenge 2####################
// 1.create an array of 50 unique numbers from 1 to 100

// const uniqueArg = [];
// while (uniqueArg.length < 40) {
//   const num = ra();
//   !uniqueArg.includes(num) && uniqueArg.push(num);
// }
// console.log(uniqueArg);

// objects
// const mobile = {
//   brand: "Samsung",
//   color: "black",
//   price: 50,
//   isItBroke: false,
//   dial: () => {
//     console.log("Calling...");
//   },
// };
// const val = mobile["color"];
// console.log(val);
// mobile.useAsHammer = false;
// console.log(mobile);
// mobile.price = 1000;
// console.log(mobile);
// delete mobile.price;
// console.log(mobile);

// ########### Destructuring##############

// const { brand, color } = mobile;
// console.log(brand, color);

// const person = {
//   name: "Prakash",
//   add: "Harrison",
//   age: 23,
// };
// const bio = (personObj) => {
//   return `Hi there my name is ${personObj.name} I live in ${personObj.add} and Im ${personObj.age} years old`;
// };

// const result = bio(person);
// console.log(result);

const person = {
  name: "Prakash",
  add: "Harrison",
  age: 23,
};
const parent = {
  dad: "Harry",
  mom: "marry",
};
const newObject = { ...person, ...parent };
console.log(newObject);

// #############object to array###############
const keyArg = Object.keys(newObject);
const KeyVal = Object.values(newObject);
console.log(keyArg, KeyVal);

for (const item in newObject) {
  console.log(newObject[item]);
}
