import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['The crocodile ', 'My girlfriend ', 'The firefighter ', 'My snake '];
let action = ['ate ', 'peed ', 'smashed ', 'cut '];
let what = ['my homework ', 'my laptop ', 'the car '];
let when = ['before the class ', 'when I was smoking ', 'while I was exercising ', 'during my dinner ', 'while I was singing '];

let quien = Math.floor(Math.random() * who.length);
let accion = Math.floor(Math.random() * action.length);
let que = Math.floor(Math.random() * what.length);
let cuando = Math.floor(Math.random() * when.length);

document.querySelector("#excuse").innerHTML = who[quien] + action[accion] + what[que] + when[cuando];
};

