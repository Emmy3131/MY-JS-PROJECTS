  // Get form elements
  var form = document.getElementById('form');
  var itemInput = document.getElementById('item');
  var quantityInput = document.getElementById('quantity');
  var priceInput = document.getElementById('price');
  var totalQuantity = document.getElementById('totalQuantity');
  var totalPrice = document.getElementById('totalPrice');
  var massage = document.getElementById('message');

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get values from input fields
    var item = itemInput.value.trim();
    var quantity = parseInt(quantityInput.value, 10);
    var price = parseFloat(priceInput.value);

    // Validate input
    if (!item || isNaN(quantity) || isNaN(price)) {
      alert("Please enter valid item name, quantity, and price.");
      return;
    }

    // Calculate total
    var total = quantity * price;

    // Display results
    totalQuantity.textContent = "Quantity: " + quantity;
    totalPrice.textContent = " | Total Price: ₦" + total.toFixed(2);
  });

