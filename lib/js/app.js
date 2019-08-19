function display_modal() {
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { modal.style.display = "none"; }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }
}

function get_details() {
  var label = document.getElementById("label_1").value;
  var height = document.getElementById("height_1").value;
  var width = document.getElementById("width_1").value;
  var x_coord = document.getElementById("x_coord_1").value;
  var y_coord = document.getElementById("y_coord_1").value;

  // Generate the PDF
  var doc = new jsPDF('l', 'pt', 'letter');
  doc.text(parseInt(x_coord), parseInt(y_coord), label);
  // doc.rect(40, 40, parseInt(width), parseInt(height), 's');

  // doc.setFontSize(17);
  //
  // doc.setFillColor(255,255,200);
  // doc.rect(100, 20, 10, 10, 'F');
  //
  // doc.setTextColor(255, 0, 0);
  // doc.text(100,25, 'USD.00');

  var data = doc.output('datauri');
  document.getElementById("pdf_preview").setAttribute("src", data);
}

function generate() {
  display_modal();
  get_details();
}
