/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let names = [
  "Last Whisper",
  "Krakosh The Mighty",
  "Sea Scent",
  "Gyadar of Nature",
  "Abyss The Great"
];
let types = ["Knight", "Archer", "Beast", "Fairy", "Dragon"];
let natures = ["Water", "Earth", "Air", "Fire", "Spirit"];

function generateExcuse() {
  let randomName = names[Math.floor(Math.random() * names.length)];
  let randomType = types[Math.floor(Math.random() * types.length)];
  let randomNature = natures[Math.floor(Math.random() * natures.length)];

  let excuse = `Your Helping Partner Is: ${randomName}, The ${randomNature} ${randomType}.`;
  return excuse;
}
function displayExcuse() {
  let excuse = generateExcuse();
  document.getElementById("excuse").innerText = excuse;
}
