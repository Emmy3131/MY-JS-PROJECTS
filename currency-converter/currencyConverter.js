
document.getElementById('btn').addEventListener('click', function(){
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  var amount = parseFloat(document.getElementById('amount').value);
 

  if (from === "" || to === "") {
        alert("Please select both currencies.");
        return;
      }

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  var result = 0;
  var rate = 1543.74

  if(from === 'naira' && to === 'dollar'){
   result = amount / rate
  }else if(from === 'dollar' && to === 'naira'){
    result = amount * rate
  }else{
    result = amount;
  }

  document.getElementById('result').value = result.toFixed(2)

})
