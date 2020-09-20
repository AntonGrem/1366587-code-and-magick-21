'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const GAP_BAR = 100;
const OBJECT_X_TEXT = 120;
const OBJECT_Y_NUMBER = 80;
const OBJECT_Y_TEXT = 260;
const OBJECT_X_BAR = 120;
const OBJECT_Y_BAR = 90;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

const generateColor = function () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `white`);

  ctx.fillStyle = `grey`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 60);


  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let colorBar = generateColor(255, i, i);
    ctx.fillStyle = 'grey';
    ctx.fillText(parseInt(times[i], 10), OBJECT_X_TEXT + GAP_BAR * i, OBJECT_Y_NUMBER);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = colorBar;
    }
    let heightBar = (BAR_HEIGHT * times[i]) / maxTime;
    if (heightBar === BAR_HEIGHT) {
      ctx.fillRect(OBJECT_X_BAR + GAP_BAR * i, OBJECT_Y_BAR, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillRect(OBJECT_X_BAR + GAP_BAR * i, OBJECT_Y_BAR + (BAR_HEIGHT - heightBar), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
    /* ctx.fillRect(OBJECT_X_BAR + GAP_BAR * i, OBJECT_Y_BAR, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);*/
    ctx.fillStyle = 'grey';
    ctx.fillText(names[i], OBJECT_X_TEXT + GAP_BAR * i, OBJECT_Y_TEXT);
    colorBar = generateColor(255, i, i);
  }
};
