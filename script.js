"use strict";

let numberofFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt ('Один из последних просмотренных фильмов?', ''),
      lastMovieRate = prompt ('На сколько вы его оцените?', ''),
      lastMovie1 = prompt ('Один из последних просмотренных фильмов?', ''),
      lastMovieRate2 = prompt ('На сколько вы его оцените?', '');


personalMovieDB.movies[lastMovie] = lastMovieRate;
personalMovieDB.movies[lastMovie1] = lastMovieRate2;

console.log(personalMovieDB);