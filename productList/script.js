  var items = [
    {
      name: 'Infinix Smart 5',
      price: 125000,
    },
     {
      name: 'Tecno pop 10',
      price: 140000,
    },
     {
      name: 'Oraimo 20mAh',
      price: 25000,
    },
     {
      name: 'fan 120W',
      price: 50000,
    },
     {
      name: 'iphone xr',
      price: 300000,
    },
  ];

function displayProducts() {
  var productList = document.getElementById('productList');
  productList.innerHTML = '';

  for (var i = 0; i < items.length; i++){
    let item = items[i]; 
    let li = document.createElement('li');
    li.textContent = item.name;
    li.setAttribute('data-value', item.name);

    li.addEventListener('click', function () {
      document.getElementById('productName').value = item.name;
      document.getElementById('priceInput').value = item.price;
      productList.style.display = 'none';
    });

    productList.appendChild(li);
  }
}
displayProducts()

document.getElementById('btnAdd').addEventListener('click', function(){
  var quantityField = document.getElementById('quantity')
  var priceEachField = document.getElementById('priceInput')
  var productInputField =  document.getElementById('productName')
  var cartBody = document.getElementById("cartBody");


  var productInput = productInputField.value;
  var quantity = parseInt(quantityField.value);
  var priceEach = parseFloat(priceEachField.value);

   if (!productInput || !quantity || !priceEach || quantity <= 0 || priceEach <= 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    const total = quantity * priceEach;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${productInput}</td>
      <td>${quantity}</td>
      <td>${priceEach}</td>
      <td>${total}</td>
      <td><button class="btnd">Delet</button></td>
    `;
    cartBody.appendChild(row);
    productInputField.value = '';
    quantityField.value = "";
    priceEachField.value = "";

    row.querySelector(".btnd").addEventListener("click", function () {
      cartBody.removeChild(row);

    });
})

  var productInput = document.getElementById("productName");
  var productList = document.getElementById("productList");

  productInput.addEventListener("click", function(){
    productList.style.display = "block";
  });

  productList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      productInput.value = e.target.dataset.value;
      productList.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".custom-dropdown")) {
      productList.style.display = "none";
    }
  });



 