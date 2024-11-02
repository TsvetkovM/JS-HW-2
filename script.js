// 1---------------
let  myCelsius;
let  myFahrenheit;

myCelsius = prompt('Введіть градус за Цельсіем');
Number(myCelsius);

myFahrenheit = myCelsius * 1.8 + 32;
alert("Градус за Фаренгейтом буде " + myFahrenheit);
console.log(myFahrenheit);
// 2---------------
let monthDays;
let myHours;
let myMinutes

monthDays = prompt('Enter number of days');
Number(monthDays);


myHours = monthDays * 24;
alert("Кількість годин " + myHours);
console.log(myHours)

myMinutes = monthDays * 1440;
alert("Кількість хвилин " + myMinutes);
console.log(myMinutes)
// 3--------------
let playerHP;
let playerStamina;
let HPDamage;
let StaminaDamage;

console.log(playerHP);
console.log(playerStamina);

playerHP = prompt("Enter your HP");
Number(playerHP);

HPDamage = playerHP - 100;
alert("Current HP " + HPDamage);
console.log(HPDamage);

playerStamina = prompt("Enter your Stamina");
Number(playerStamina);

StaminaDamage = playerStamina - 75;
alert("Current Stamina " + StaminaDamage);
console.log(StaminaDamage);
// 4------------------------
let purchaseSum;
let sumDiscount
let sumResult;

purchaseSum = prompt("Sum? ");
Number(purchaseSum);

sumDiscount = purchaseSum * 0.1;
alert("Ваша знижка буде " + sumDiscount);

sumResult = purchaseSum - sumDiscount;
alert("Остаточна сума буде " + sumResult);
console.log(sumResult);
// // 5----------------------------
let numOne = Math.floor(31.14);
console.log(numOne);
// 6------------------------
let myFloat = parseFloat("0.5");
let myFloat2 = parseFloat("123.321Hello");
console.log(myFloat);
console.log(myFloat2);
// 7---------------------
let myInt = parseInt('1.9');
let myInt2 = parseInt('0254');
console.log(myInt);
console.log(myInt2);
// 8------------------------
let mySqrt;
let mySqrtResult;

mySqrt = prompt("Enter your square number ");
Number(mySqrt);

mySqrtResult = Math.sqrt(mySqrt);
alert("Your number radical expression " + mySqrtResult);
console.log(mySqrt);
// 9----------------------------

let myNum;
let myString;

myNum = parseInt(13.31);
console.log(myNum);

myString = myNum.toString(13.31);
console.log(myString);






