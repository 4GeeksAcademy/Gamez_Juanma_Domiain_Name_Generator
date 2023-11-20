/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".es", ".com", ".net", ".us", ".io"];
  let resultado = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let y = 0; y < extension.length; y++) {
          resultado +=
            '<li class= "text-success">' +
            pronoun[i] +
            adj[j] +
            noun[x] +
            extension[y] +
            "</li>";
        }
      }
    }
  }

  document.querySelector("#domain").innerHTML = resultado;
};
