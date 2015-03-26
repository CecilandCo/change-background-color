$('button').on('click', function() {
  var colors = ['blue', 'green', 'yellow', 'red'];
  var color = randomFrom(colors);

  $('body').css('background-color', color)
})

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
