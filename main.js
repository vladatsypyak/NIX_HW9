//_______________Task_1__________________
// let i = 3;
// while (i) {
//     alert(i--);
// }
//  останнє тут виведеться 1, тому що кожного разу від і віднімається 1, і коли доходить до 0, цикл зупиняється, бо 0 повертає false

//_______________Task_2__________________
// let a = 1;
// let b = 2;
// let c = 3
// if (a < b && b < c) {
//     a*=2;
//     b*=2
//     c*=2
// } else {
//     a = -a
//     b = -b
//     c = -c
// }
// console.log(a,b,c)

//_______________Task_3__________________
// let a = 9;
// let b = 8;
// let c = 0
// if (a < b && b < c || c < b && b < a) {
//     a*=2;
//     b*=2
//     c*=2
// } else {
//     a = -a
//     b = -b
//     c = -c
// }
// console.log(a,b,c)

//_______________Task_4__________________

// let a = 1;
// let b = 3;
// let c = 5
// if (b - a < c -a) {
//     console.log(b)
// } else {
//     console.log(c)
// }


//_______________Task_5__________________
// let y = 1
// let x = 0
// if(y === 0 && x === 0){
//     console.log(0)
// } else if(x === 0){
//     console.log(1)
// } else if(y === 0){
//     console.log(2)
// } else{
//     console.log(3)
// }

//_______________Task_6__________________

// let x = 1
// let y = -2
// if (x > 0) {
//     if (y > 0) {
//         console.log(1 + "чверть")
//     } else {
//         console.log(4 + "чверть")
//     }
// } else if (y < 0) {
//     console.log(3 + "чверть")
// } else {
//     console.log(2 + "чверть")
//
// }

//_______________Task_7__________________
// let a = {
//     x : -2,
//     y: 3
// }
// let b = {
//     x :-2,
//     y: 3
// }
// let c = {
//     x : 3,
//     y: 1
// }
// let d = {}
//
// if(a.x === c.x){
//     d.x = b.x
// } else if(b.x === c.x){
//     d.x = a.x
// } else {
//     d.x = c.x
//
// }
//
// if(a.y === c.y){
//     d.y = b.y
// } else if(b.y === c.y){
//     d.y = a.y
// } else {
//     d.y = c.y
//
// }
// console.log(d)
//_______________Task_8__________________

// let year = 400
// function isLeapYear(year){
//
//     if (year % 100 ===0 ) {
//         if( year % 400 === 0) {
//             return false
//         }
//         return true
//     } else if (year % 4 === 0) {
//         return true
//     }
//     return false
// }
//
// console.log(isLeapYear(year));

//_______________Task_9__________________

// function describeNum(num){
//     let isNull = num === 0
//    if (isNull) {
//       return "нульове число"
//    }
//     let oddOrEven = num % 2  ? "непарне" : "парне"
//     let sign = num < 0 ? 'негативне' : "позитивне"
//     return `${oddOrEven} ${sign} число `
// }
//
// console.log(describeNum(-21));


//_______________Task_10__________________

// function describeNum(num) {
//     let oddOrEven = num % 2 ? "непарне" : "парне"
//     let length = String(num).length
//     let digits = length === 1 ? "однозначне" :
//         length === 2 ? "двозначне" : "трьохзначне"
//     return `${oddOrEven} ${digits} число`
// }
//
// console.log(describeNum(1));

//_______________Task_11__________________
// перший і другий цикл виведуть 1, 2, 3, 4, 5. Не важливо чи це постфіксна чи префіксна форма


//_______________Task_12__________________
// перший і другий цикл виведуть 0, 1, 2, 3, 4, 5. Не важливо чи це постфіксна чи префіксна форма


//_______________Task_13__________________

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) console.log(i)
// }

//_______________Task_14__________________
// let i = 0
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }

//_______________Task_15__________________


// while (true) {
//     let userAnswer = prompt('type number')
//     if (+userAnswer > 100 || userAnswer === null) {
//         break
//     }
// }

//_______________Task_16__________________
// function isPrime(num) {
//     for (let i = 1; i <= num ; i++) {
//         if(num % i === 0 && i !==num && i !== 1) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(1));

//_______________Task_17__________________

// function findAverage(){
//     let a = +prompt('type number')
//     let b = +prompt('type number')
//     return (a + b)/2
//
// }
//
// console.log(findAverage());

//_______________Task_18__________________

// function getSquare(num){
//     return num*num
// }
//
// console.log(getSquare(5));

//_______________Task_19__________________
// function minAndMax(){
//     let a = +prompt('type first number')
//     let b = +prompt('type second number')
//     let c = +prompt('type third number')
//     let min = Math.min(a,b,c)
//     let max = Math.max(a,b,c)
//     alert(max - min)
//
// }
// minAndMax()


//_______________Task_20__________________

// function isEven(){
//     let num = +prompt('type number')
//     return num % 2 === 0
// }

// console.log(isEven());


//_______________Task_21__________________
// function countSumOfDigits(num){
//     let sum = 0
//     let digits = numberOfDigits(num)
//     for (let i = 1; i <= digits; i++) {
//         let digit = (num % Math.pow(10, i) - num % Math.pow(10, i - 1))/Math.pow(10, i - 1)
//         sum += digit
//     }
// return sum
//
// }
//
// function numberOfDigits(num) {
//     let count = 0
//     for (let i = 1; i < num; i++) {
//         if(num >= Math.pow(10, i - 1)) {
//             count = i
//         }
//     }
//     return count
// }
//
// console.log(countSumOfDigits(111));


//_______________Task_22__________________

// function convertToAndFromInches() {
//     let convertTo = prompt('Якщо Ви хочете конвертувати сантиметри в дюйми, введіть 1. Якщо навпаки - 2')
//     if(convertTo === "1") {
//         let userNum = +prompt('Введіть сантиметри ')
//         alert(userNum/ 2.54)
//     } else if (convertTo === "2"){
//         let userNum = +prompt('Введіть дюйми ')
//         alert(userNum * 2.54)
//     } else if(convertTo === null) {
//
//     } else {
//         alert("Ви ввели некорректне число")
//
//     }
// }
// convertToAndFromInches()

//_______________Task_23__________________
// function startGame() {
//     let totalPrize = 0
//     let roundNum = 1
//     let roundInfo = [
//         {
//             question: "Найменша країна світу",
//             a: "Італія",
//             b: "Малайзія",
//             c: "Ватикан",
//             d: "Еквадор",
//             correct: "б"
//         },
//         {
//             question: "Найбагатша країна світу",
//             a: "Люксембург",
//             b: "Китай",
//             c: "Великобританія",
//             d: "Швейцарія",
//             correct: "а"
//         },
//         {
//             question: "Перший фільм",
//             a: "Сінемаколор",
//             b: "Історія банди Неда Келлі",
//             c: "Прибуття поїзда на вокзал Ла-Сьота",
//             d: "Гранд кафе",
//             correct: "в"
//         },
//         {
//             question: "Висота Ейфелевої вежі,
//             a: "302м",
//             b: "425м",
//             c: "265м",
//             d: "330м",
//             correct: "г"
//         },
//         {
//             question: "Режисер першого аніме",
//             a: "Сімокава Декотена",
//             b: "Хаяо Міядзакі",
//             c: "Терукі Цутому",
//             d: "Хідеакі Анно",
//             correct: "а"
//         }
//
//     ]
//
//     function round() {
//         let quiz = roundInfo[roundNum - 1]
//         let prize = countPrize(roundNum)
//         let userAnswer = prompt(`${quiz.question}. Виберіть правильний варіант:
//         a) ${quiz.a}; б) ${quiz.b}; в) ${quiz.c}; г) ${quiz.d};`)
//         if (userAnswer === quiz.correct) {
//             totalPrize += prize
//             if (roundNum === 5) {
//                 alert(`Це був останній раунд. Вітаємо ви виграли ${prize}грн.
//                   Ваша загальна сумма виграшу становить ${totalPrize}`)
//                 return
//             }
//             let continueGame = confirm(
//                 ` Вітаємо ви виграли ${prize}грн.
//                   Ваша загальна сумма виграшу становить ${totalPrize}
//                   Натисніть "Ок", щоб продовжити, або "Cancel", щоб закінчити гру та забрати виграш`)
//             if (continueGame) {
//                 roundNum++
//                 round()
//             } else {
//                 alert(`Дякуємо за гру! Ваша загальна сумма виграшу становить ${totalPrize}`)
//                 return
//             }
//         } else {
//             alert(`На жаль ви програли`)
//         }
//
//     }
//
//     round()
// }

// startGame()

// function countPrize(round) {
//     return 100 * (Math.pow(2, round - 1))
// }
//
//_______________Task_24__________________
// function getSumOrMultiply() {
//     let num = +prompt('type number')
//     if (num % 2 === 0) {
//         let sum = 0
//         for (let i = 1; i <= 3; i++) {
//             let digit = (num % Math.pow(10, i) - num % Math.pow(10, i - 1)) / Math.pow(10, i - 1)
//             sum += digit
//         }
//         alert(  `sum of the digits  is ${sum}`)
//     } else {
//         let mul = 1
//         for (let i = 1; i <= 3; i++) {
//             let digit = (num % Math.pow(10, i) - num % Math.pow(10, i - 1)) / Math.pow(10, i - 1)
//             mul *= digit
//         }
//         alert(  `multiply of the digits  is ${mul}`)
//
//     }
// }
// getSumOrMultiply()
//_______________Task_25__________________

// function isTriangle() {
//     let a = +prompt('type first number')
//     let b = +prompt('type second number')
//     let c = +prompt('type third number')
//
//     if (a < b + c && b < a + c && c < b + a){
//         alert('such triangle can exist')
//
//     } else {
//         alert('such triangle cannot exist')
//
//     }
// }
// isTriangle()

//_______________Task_26__________________
// function isInsideCircle(x,y, r) {
//     if(x * x + y * y > r * r) {
//         return false
//     }
//     return true
// }
//
// console.log(isInsideCircle(4, 9, 10));

//_______________Task_27__________________

// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete  user.name
// console.log(user)
//_______________Task_28__________________

// const user = {
//     name: "John"
// };
// user.name = "Pete"; // Це працюватиме?

// змінити об'єкт оголошений за допомогою const можна, так як об'єкти зберігаються по посиланню. А ось спроба змінити посилання призведе до помилки

//_______________Task_29__________________
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function countSalaries(obj){
// let sum = 0
//     for (const objKey in obj) {
//         sum+=obj[objKey]
//     }
//     return sum
// }
// let sum = countSalaries(salaries)

//_______________Task_30__________________
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     a: "sth"
// }
// function multiplyNumeric(obj){
//     for (const objKey in obj) {
//         if(typeof obj[objKey] === 'number'){
//             obj[objKey]+= 2
//         }
//     }
// }
// multiplyNumeric(salaries)
// console.log(salaries)