document.addEventListener('change', function () {
  var checkboxes = document.getElementsByClassName("checkbox");
  var totalDisplay = document.getElementById("total");
  var total = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      total += parseFloat(checkboxes[i].value);
    }
  }

  totalDisplay.textContent = total.toFixed(2);
});
