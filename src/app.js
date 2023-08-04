/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
//Seleccionamos el body y le cambiamos el color
let body = document.querySelector("body");

//Creamos un nuevo div
let nuevoDiv = document.createElement("DIV");
let app = document.querySelector("#app");
nuevoDiv.classList.add("bg", "bg-light", "rounded", "mt-2");
nuevoDiv.innerHTML = `<div class="row symbol heading" >Fila 1</div><div class= "row number">Fila 2</div><div class="row reverse">Fila3</div>`;
app.appendChild(nuevoDiv);
app.classList.add("justify-content-center");
//Donde elegimos un número aleatorio para la carta
let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
console.log(numeros[2]);
let numeroAleatorio = Math.floor(Math.random() * numeros.length);
console.log(numeros[numeroAleatorio]);

let fila2 = document.querySelector(".number");
fila2.innerHTML = `${numeros[numeroAleatorio]}`;

//Sección donde elegimos la suit de la carta ♦ ♥ ♠ ♣
let suit = [
  { suit: "♥", color: "red" },
  { suit: "♦", color: "red" },
  { suit: "♠", color: "black" },
  { suit: "♣", color: "black" }
];
//Seleccionar un elemento aleatorio de un obj
let suitAleatoria = Math.floor(Math.random() * suit.length);
console.log(suit[suitAleatoria]["suit"]);

let fila1 = document.querySelector(".heading");
fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

let fila3 = document.querySelector(".reverse");
fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

fila1.style.color = suit[suitAleatoria]["color"];
fila3.style.color = suit[suitAleatoria]["color"];

fila2.classList.add("justify-content-center");
fila3.classList.add("justify-content-end");
