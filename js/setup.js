'use strict';
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`#699`, `#F36`, `#969`, `#396`, `#CC3`, `#000`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);


const shuffleArr = function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
shuffleArr(WIZARD_NAMES);
shuffleArr(WIZARD_SECOND_NAMES);
shuffleArr(COAT_COLOR);
shuffleArr(EYES_COLOR);
const wizards = [
  {
    name: WIZARD_NAMES[0] + WIZARD_SECOND_NAMES[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1] + WIZARD_SECOND_NAMES[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2] + WIZARD_SECOND_NAMES[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3] + WIZARD_SECOND_NAMES[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3]
  }
];

for (let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
