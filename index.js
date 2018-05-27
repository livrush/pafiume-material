const milks = [
  'GoldMilk.png',
  'MarbleMilk.png',
  'MetalMilk.png',
  'GlassMilk.png',
  'FurMilk.png',
  'FabricMilk.png',
  'WaterMilk.png',
  'WoodMilk.png',
  'CorkMilk.png',
  'MarbleMilk2.png',
  'LeatherMilk.png',
  'StoneMilk.png',
];

$(document).ready(function() {
  $('#loading').remove();
  const $milks = milks.map(milk => $('<div>').addClass('material').css('background-image', `url(./assets/${milk})`));
  $('body').append($milks);
});
