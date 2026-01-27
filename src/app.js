import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const Who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const When = [
  'before the class', 
  'when I was sleeping', 
  'while I was exercising', 
  'during my lunch', 
  'while I was praying'
];

function generarExcusa() {
  const randomWho = Who[Math.floor(Math.random() * Who.length)]
  const randomAction = action[Math.floor(Math.random() * action.length)]
  const randomWhat = what[Math.floor(Math.random() * what.length)]
  const randomWhen = When[Math.floor(Math.random() * When.length)]
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function () {
  const excusa = document.getElementById('excuse');
  excusa.innerHTML = generarExcusa()
  console.log("Hello Rigo from the console!");
};