import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  
  let Who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let When = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  function generarExcusa(){
  let randomWho = Who[Math.floor(Math.random()* Who.length)]
  let randomAction = action[Math.floor(Math.random()* action.length)]
  let randomWhat = what[Math.floor(Math.random()* what.length)]
  let randomWhen = When[Math.floor(Math.random()* When.length)]
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  window.onload = function() {
    const excusa = document.getElementById('excuse');
      excusa.innerHTML = generarExcusa()
        console.log("Hello Rigo from the console!");
        };