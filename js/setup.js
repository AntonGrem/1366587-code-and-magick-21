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
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
const Wizards = function (name, coatColor, eyesColor) {
  this.name = name;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;
};
const randomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* for (let i = 0; i < 4; i++) {
  const randomN = randomNumber(0, WIZARD_NAMES.length - 1);
  const randomN1 = randomNumber(0, WIZARD_SECOND_NAMES.length - 1);
  const randomN2 = randomNumber(0, COAT_COLOR.length - 1);
  const randomN3 = randomNumber(0, EYES_COLOR.length - 1);
  const randomName = WIZARD_NAMES[randomN] + ` ` + WIZARD_SECOND_NAMES[randomN1];
  const randomCoatColor = COAT_COLOR[randomN2];
  const randomEyesColor = EYES_COLOR[randomN3];

  const wizard = new Wizards(randomName, randomCoatColor, randomEyesColor);
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  similarListElement.appendChild(wizardElement);
}*/

const renderWizard = function () {
  const randomN = randomNumber(0, WIZARD_NAMES.length - 1);
  const randomN1 = randomNumber(0, WIZARD_SECOND_NAMES.length - 1);
  const randomN2 = randomNumber(0, COAT_COLOR.length - 1);
  const randomN3 = randomNumber(0, EYES_COLOR.length - 1);
  const randomName = WIZARD_NAMES[randomN] + ` ` + WIZARD_SECOND_NAMES[randomN1];
  const randomCoatColor = COAT_COLOR[randomN2];
  const randomEyesColor = EYES_COLOR[randomN3];
  const wizardUser = new Wizards(randomName, randomCoatColor, randomEyesColor);
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizardUser.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizardUser.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardUser.eyesColor;
  similarListElement.appendChild(wizardElement);

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
