/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   document.querySelector("#helper").addEventListener("click", function() {
//     generateExcuse("helper");
//   });

//   let name = [
//     "Last Whisper",
//     "Krakosh The Mighty",
//     "Sea Scent",
//     "Gyadar of Nature",
//     "Abyss The Great"
//   ];
//   let type = ["Knight", "Archer", "Beast", "Fairy", "Dragon"];
//   let nature = ["Water", "Earth", "Air", "Fire", "Spirit"];

//   function generateExcuse() {
//     let randomName = name[Math.floor(Math.random() * name.length)];
//     let randomType = type[Math.floor(Math.random() * type.length)];
//     let randomNature = nature[Math.floor(Math.random() * nature.length)];

//     let excuse =
//       "Your Helping Partner Is:" +
//       " " +
//       [randomName] +
//       " " +
//       ", The" +
//       " " +
//       [randomNature] +
//       " " +
//       [randomType] +
//       ".";
//     document.querySelector(".characterName").innerHTML = excuse;
//   }
// };
window.onload = () => {
  document.querySelector("#helper").addEventListener("click", generateExcuse);

  const name = [
    "Last Whisper",
    "Krakosh The Mighty",
    "Sea Scent",
    "Gyadar of Nature",
    "Abyss The Great"
  ];
  const type = ["Knight", "Archer", "Beast", "Fairy", "Dragon"];
  const nature = ["Water", "Earth", "Air", "Fire", "Spirit"];

  function generateExcuse() {
    const randomName = name[Math.floor(Math.random() * name.length)];
    const randomType = type[Math.floor(Math.random() * type.length)];
    const randomNature = nature[Math.floor(Math.random() * nature.length)];

    const excuse = `Your Helping Partner Is: ${randomName}, The ${randomNature} ${randomType}.`;
    document.querySelector(".characterName").innerHTML = excuse;
  }
};
