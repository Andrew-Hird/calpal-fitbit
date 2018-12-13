/*
 * Entry point for the watch app
 */
import document from "document";

let inputtext = document.getElementById("input");
inputtext.text = '0kJ';

let outputtext = document.getElementById("output");
outputtext.text = '0CAL';

let ninebtn = document.getElementById("nine");
let eightbtn = document.getElementById("eight");
let sevenbtn = document.getElementById("seven");
let sixbtn = document.getElementById("six");
let fivebtn = document.getElementById("five");
let fourbtn = document.getElementById("four");
let threebtn = document.getElementById("three");
let twobtn = document.getElementById("two");
let onebtn = document.getElementById("one");
let clearbtn = document.getElementById("clear");
let zerobtn = document.getElementById("zero");
let backbtn = document.getElementById("back");

ninebtn.onactivate = evt => setInput(9);
eightbtn.onactivate = evt => setInput(8);
sevenbtn.onactivate = evt => setInput(7);
sixbtn.onactivate = evt => setInput(6);
fivebtn.onactivate = evt => setInput(5);
fourbtn.onactivate = evt => setInput(4);
threebtn.onactivate = evt => setInput(3);
twobtn.onactivate = evt => setInput(2);
onebtn.onactivate = evt => setInput(1);
clearbtn.onactivate = evt => clearInput();
zerobtn.onactivate = evt => setInput(0);
backbtn.onactivate = evt => clearLast();

function setInput(number) {
  const inputStripped = inputtext.text.replace('kJ', '')
  let newInput;
  
  if (inputStripped === '0') {
    newInput = number;
  } else {
    newInput = inputStripped + number;
  }
  setValues(newInput);
}

function setValues(input) {
  const cals = Math.round(input / 4.184) + 'CAL'
  if (cals.length <= 8) {
    inputtext.text = input + 'kJ';
    outputtext.text = cals;
  }
}

function clearInput() {
  inputtext.text = '0kJ';
  outputtext.text = '0CAL';
}

function clearLast() {
  const inputStripped = inputtext.text.replace('kJ', '')
  let newInput;
  
  if (inputStripped === '' || inputStripped.length === 1) {
    clearInput();
  } else {
    newInput = inputStripped.slice(0, -1);
    setValues(newInput);
  }
}
