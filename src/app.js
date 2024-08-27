/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#female").addEventListener("click", function() {
    generateExcuse("female");
  });



  let name = [
    "Last Whisper",
    "Krakosh The Mighty",
    "Sea Scent",
    "Gyadar of Nature",
    "Abyss The Great"
  ];
  let type = ["Knight", "Archer", "Beast", "Fairy", "Dragon"];
  let nature = ["Water", "Earth", "Air", "Fire", "Spirit"];

  function generateExcuse() {
    let randomName = name[Math.floor(Math.random() * name.length)];
    let randomType = type[Math.floor(Math.random() * type.length)];
    let randomNature = nature[Math.floor(Math.random() * nature.length)];

    let excuse = "Your Helping Partner Is:" + name[randomName] + ", The" + nature[randomNature] + type[randomType] + ".";
    document.querySelector(".characterName").innerHTML = excuse;
  }
};
