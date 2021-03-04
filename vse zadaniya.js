// "use strict";

// let numberofFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const lastMovie = prompt ('Один из последних просмотренных фильмов?', ''),
//       lastMovieRate = prompt ('На сколько вы его оцените?', ''),
//       lastMovie1 = prompt ('Один из последних просмотренных фильмов?', ''),
//       lastMovieRate2 = prompt ('На сколько вы его оцените?', '');


// personalMovieDB.movies[lastMovie] = lastMovieRate;
// personalMovieDB.movies[lastMovie1] = lastMovieRate2;

// console.log(personalMovieDB);


// "use strict";

// if (1) {
//     console.log('Okey!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('sosi hui');
// } else if (num > 100) {
//     console.log('dohuya');
// } else { 
//     console.log('zaebis');
// }

// (num === 50) ? console.log('zaebis') : console.log('sosi hui');

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log('hueta');
//         break;
//     case 100:
//         console.log('hueta');
//         break;
//     case 50:
//             console.log('zaebis');
//             break;
//     default:
//             console.log('pososi');
//             break;
// }

// "use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 100; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
 
// }

// "use strict";

// let numberofFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const lastMovie = prompt ('Один из последних просмотренных фильмов?', ''),
//           lastMovieRate = prompt ('На сколько вы его оцените?', '');

//  if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
//       personalMovieDB.movies[lastMovie] = lastMovieRate;
//        console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('хуёво глянул, браток');
// } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
//     console.log ('уже лучше');
// } else if (personalMovieDB.count >= 30) {
//     console.log ('лучший за работой');
// } else {
//     console.log ('хуета');
// }

// console.log(personalMovieDB);

// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a+b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// function ret() {
//     let num =50;
//     return num;
// }
// const anototherNum = ret();
// console.log(anototherNum);

// const logger = function() {
//     console.log("hello");
// };
// logger();

// const str = "test";

// // console.log(str[2] = "d");

// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "hello suka";

// console.log(logg.slice(-5,-1));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// const num = 12.5;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// let numberofFilms;

// function start() {
//      numberofFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

//      while(numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
//         numberofFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
//      }
// }

// start();

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//     const lastMovie = prompt ('Один из последних просмотренных фильмов?', ''),
//           lastMovieRate = prompt ('На сколько вы его оцените?', '');

//   if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length <50){
//       personalMovieDB.movies[lastMovie] = lastMovieRate;
//        console.log('done');
//     } else {
//         console.log('error');
//         i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectedPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//     console.log('хуёво глянул, браток');
//     } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
//     console.log ('уже лучше');
//     } else if (personalMovieDB.count >= 30) {
//     console.log ('лучший за работой');
//     } else {
//     console.log ('хуета');
//     }
// }
// detectedPersonalLevel();


// console.log(personalMovieDB);

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);

//     function second(); {
//         console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(Object.keys(options).length);

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} , имеет значение ${options[key] [i]}`);
// //             counter ++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} , имеет значение ${options[key]}` );
// //         counter++;
// //     }
// // } 
// // console.log(counter);

