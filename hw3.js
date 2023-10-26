// // Задание 1
// let password = 'пароль';
// let enteredPassword = prompt (`Введите пароль`);

// if (enteredPassword === password) {
//     alert (`Пароль введен верно`);
// } else {
//     alert (`Пароль введен неправильно`);
// }

// // Задание 2
// let c = prompt(`Введите число`);

// if (c >= 0 && c <= 10) {
//     console.log(`верно`);
// } else {
//     console.log(`неверно`);
// }

// // Задание 3
// let d = prompt(`Введите первое число`);
// let e = prompt(`Введите второе число`);

// if (d > 100 || e > 100) {
//     console.log(`Верно`);
// } else {
//     console.log(`Неверно`);
// }

// Задание 4
// let a = '2';
// let b = '3';

// alert(Number(a) + Number(b));

// Задача 5
// let monthNumber = prompt('Введите номер месяца года');

// switch (monthNumber) {
//     case '12':
//     case '1':
//     case '2':
//         console.log('Зима');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         console.log('Весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         console.log('Лето');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         console.log('Осень');
//     default:
//         console.log('Такого месяца не существует');
//         break;
// }
    
// Задача 7
// let result = prompt(`Пожалуйста, введите любое число`);
// console.log (typeof(result));

// if (!isNaN(result)) {
//     if (result % 2 === 0) {
//         alert('ты ввел четное число');
//     } else {
//         alert('ты ввел нечетное число');
//     }
// } else {
//     alert('ты ввел белиберду');
// }

// Задача 8
// let clientOS = prompt('Если у вас Айфон: введите 0, если Андроид: введите 1'); 

// clientOS == 0 ? console.log(`Установите версию приложения для iOS по ссылке`) : console.log(`Установите версию приложения для Android по ссылке`);

// Задача 9
// let clientOS = Number(prompt('Если у вас Айфон: введите 0, если Андроид: введите 1'));
// let clientDeviceYear = Number(prompt('какого года ваш телефон?'));

// if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
//     console.log(`Установите версию приложения для iOS по ссылке`);
// } else if ((clientOS === 0) && (clientDeviceYear < 2015)) {
//     console.log(`Установите облегченную версию приложения для iOS по ссылке`);
// } else if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
//     console.log(`Установите версию приложения для Android по ссылке`);
// } else {
//     console.log(`Установите облегченную версию приложения для Android по ссылке`);
// }