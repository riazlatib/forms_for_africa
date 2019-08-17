function get_details() {
  var label = document.getElementById("label_1").value;
  var height = document.getElementById("height_1").value;
  var width = document.getElementById("width_1").value;
  var x_coord = document.getElementById("x_coord_1").value;
  var y_coord = document.getElementById("y_coord_1").value;

  console.log('Label: ' + label);
  console.log('Height: ' + height);
  console.log('Widht: ' + width);
  console.log('X Co-Ordinates: ' + x_coord);
  console.log('Y Co-Ordinates: ' + y_coord);

  var display_text = '';
  display_text += 'Label: ' + label + '<br/>';
  display_text += 'Height: ' + height + '<br/>';
  display_text += 'Width: ' + width + '<br/>';
  display_text += 'X Co-Ordinates: ' + x_coord + '<br/>';
  display_text += 'Y Co-Ordinates: ' + y_coord + '<br/>';

  document.getElementById("display_text").innerHTML = display_text;
}

function generate() {
  get_details();
}
