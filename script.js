import { scenes } from "./data/scenes.js";
import { player } from "./data/player.js";
import { evaluateCondition } from "./systems/conditions.js";
import { addStat } from "./systems/stats.js";

let currentScene = "intro";

const sceneText = document.getElementById("scene-text");
const choicesBox = document.getElementById("choices");

function renderScene(sceneId) {
  const scene = scenes[sceneId];
  currentScene = sceneId;

  sceneText.innerText = scene.text;
  choicesBox.innerHTML = "";

  scene.choices
    .filter(choice => evaluateCondition(player, choice.condition))
    .forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;

      btn.onclick = () => {
        // optional stat effects
        if (choice.effect?.stats) {
          Object.entries(choice.effect.stats).forEach(([stat, val]) => {
            addStat(player, stat, val);
          });
        }

        // optional item effects
        if (choice.effect?.addItem) {
          player.inventory.push(choice.effect.addItem);
        }

        renderScene(choice.next);
      };

      choicesBox.appendChild(btn);
    });
}

renderScene(currentScene);
