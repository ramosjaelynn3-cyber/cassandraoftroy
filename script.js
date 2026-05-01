import { scenes } from "./data/scenes.js";
import { player } from "./data/player.js";

let currentScene = "intro";

const sceneText = document.getElementById("scene-text");
const choicesBox = document.getElementById("choices");

function renderScene(sceneId) {
  const scene = scenes[sceneId];
  currentScene = sceneId;

  // text
  sceneText.innerText = scene.text;

  // choices
  choicesBox.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;

    btn.onclick = () => {
      if (choice.effect) choice.effect(player);
      renderScene(choice.next);
    };

    choicesBox.appendChild(btn);
  });
}

// start game
renderScene(currentScene);
