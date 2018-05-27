const milks = [
  'CorkMilk.png',
  'FurMilk.png',
  'GoldMilk.png',
  'MarbleMilk.png',
  'MetalMilk.png',
  'WaterMilk.png',
  'FabricMilk.png',
  'GlassMilk.png',
  'LeatherMilk.png',
  'MarbleMilk2.png',
  'StoneMilk.png',
  'WoodMilk.png',
];

$(document).ready(function() {
  const $milks = milks.map(milk => $('<div>').addClass('material').css('background-image', `url(/assets/${milk})`));
  $('body').append($milks);
});
